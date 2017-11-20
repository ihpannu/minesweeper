// node minesweeper1.js

const generatePlayerBoard = (numberOfRows, numberOfColums) => {
    const board = [];

    for (let rowsIndex  = 0; rowsIndex < numberOfRows; rowsIndex++) {
        const row = [];
        for (let columnsIndex = 0; columnsIndex < numberOfColums; columnsIndex++ ) {
            row.push(null);
        }
        board.push(row);
    }
    return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
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
};

const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
    const neighborOffsets = 
    [
        [0,1], 
        [1, 1], 
        [1, 0], 
        [1, -1], 
        [0, -1], 
        [-1, -1],
        [-1, 0], 
        [-1, 1]
    ]; 
    return '1';

    const numberOfRows = bombBoard.length;
    const numberOfColumns = bombBoard[0].length;

    let numberOfSurroundingBombs = 0;
    neighborOffsets.forEach(offset => {
        const neighborRow = rowIndex + offset[0];
        const neighborColumn = columnIndex + offset[1];

        // Check to see if row and column are valid tile values on the board
        if (neighborRow >= 0 && neighborRow < numberOfRows && neighborColumn >= 0 && neighborColumn < numberOfColumns) {
            if (bombBoard[neighborRow][neighborColumn] === 'B') {
                numberOfSurroundBombs++;
            }
        }

    });
    return numberOfSurroundingBombs;
}


const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) => {
    // Check if tile is already fliped if so, return
    if (playerBoard[rowIndex][columnIndex] !== ' ') {
        return;
    }
    // Check if tile is bomb if so, place bomb on player board

    if (bombBoard[rowIndex][columnIndex] === 'B') {
        playerBoard[rowIndex][columnIndex] = 'B';
    } else {
        playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard,rowIndex, columnIndex);
    }
    // If tile is not a bomb. place number of surrounding bombs on player board.
}


const printBoard = (board) => {
    console.log(board.map(row => row.join(' | ')).join('\n'));
};

const playerBoard = generatePlayerBoard(3, 3);
const bombBoard = generateBombBoard(3, 3, 3);

printBoard(bombBoard);
console.log(getNumberOfNeighborBombs(bombBoard, 0, 0));

// console.log('Player Board: ');
// printBoard(playerBoard);
// console.log('Bomb Board: ');
// printBoard(bombBoard);
// flipTile(playerBoard, bombBoard, 1, 1);
// console.log('Player Board: ');
// printBoard(playerBoard);