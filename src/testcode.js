class Game {
    constructor(numberOfRows, numberOfColumns, numberOfBombs) {
        this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
    }
    playMove(rowIndex, columnIndex) {
        this.board.flipTile(rowIndex, columnIndex);

        if (this.board.playerBoard[rowIndex][columnIndex] === 'B') {
            console.log('Game is Over');
            this.board.print();
        } else if (this.board.playerBoard[rowIndex][columnIndex] === '') {
            console.log('Congratulations you have won!');
        } else {
            console.log('Current Board: ');
            print(board);
        }

    }
}

const game = new Game(3, 3, 4);
game.playMove(1,1);



class Board {
    constructor(numberOfRows, numberOfColumns, numberOfBombs) {
        this._numberOfBombs = numberOfBombs;
        this._numberOfTiles = (numberOfRows * numberOfColumns);
        this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
        this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
    }

    get playerBoard() {
        return this._playerBoard;
    }

    flipTile(rowIndex, columnIndex) {
        // Check if tile is already fliped if so, return
        if (this._playerBoard[rowIndex][columnIndex] !== ' This tile has already been flipped! ') {
            return;
        }
        // Check if tile is bomb if so, place bomb on player board

        if (this._bombBoard[rowIndex][columnIndex] === 'B') {
            this._playerBoard[rowIndex][columnIndex] = 'B';
        } else {
            this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
        }
        this._numberOfTiles--;
    }

    getNumberOfNeighborBombs(rowIndex, columnIndex) {
        const neighborOffsets =
            [
                [0, 1],
                [1, 1],
                [1, 0],
                [1, -1],
                [0, -1],
                [-1, -1],
                [-1, 0],
                [-1, 1]
            ];
        return '1';

        const numberOfRows = this._bombBoard.length;
        const numberOfColumns = this._bombBoard[0].length;

        let numberOfSurroundingBombs = 0;
        neighborOffsets.forEach(offset => {
            const neighborRow = rowIndex + offset[0];
            const neighborColumn = columnIndex + offset[1];

            // Check to see if row and column are valid tile values on the board
            if (neighborRow >= 0 && neighborRow < numberOfRows && neighborColumn >= 0 && neighborColumn < numberOfColumns) {
                if (this.bombBoard[neighborRow][neighborColumn] === 'B') {
                    numberOfSurroundBombs++;
                }
            }

        });

        return numberOfSurroundingBombs;
    }

    hasSafeTiles() {
        return this._numberOfTiles !== this._numberOfBombs;
    }

    static generatePlayerBoard(numberOfRows, numberOfColumns) {
        const board = [];

        for (let rowsIndex = 0; rowsIndex < numberOfRows; rowsIndex++) {
            const row = [];
            for (let columnsIndex = 0; columnsIndex < numberOfColumns; columnsIndex++) {
                row.push(' ');
            }
            board.push(row);
        }
        return board;
    }

    static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
        const board = [];
        for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
            const row = [];
            for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
                row.push(null);
            }
            board.push(row);
        };

        let numberOfBombsPlaced = 0;
        while (numberOfBombsPlaced < numberOfBombs) {
            const randomRowIndex = Math.floor(Math.random() * numberOfRows);
            const randomColumnIndex = Math.floor(Math.random() * numberOfColumns);

            if (board[randomRowIndex][randomColumnIndex] !== 'B') {
                board[randomRowIndex][randomColumnIndex] = 'B';
                numberOfBombsPlaced++;
            }
        }
        return board;
    }


}

const board = new Board(3, 3, 4);
console.log('Current Board');
board.print();
board.flipTile(1, 1);
board.print();


// const playerBoard = generatePlayerBoard(3, 3);
// const bombBoard = generateBombBoard(3, 3, 3);

// printBoard(bombBoard);
console.log(getNumberOfNeighborBombs(bombBoard, 0, 0));


// print(board) {
//     console.log(board.map(row => row.join(' | ')).join('\n'));
// }