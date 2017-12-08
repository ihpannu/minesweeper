// To play Minesweeper, we will create instances of MineSweeperGame in command line.
// For example:
// In the command line, navigate to the lib directory and run `node`
// Run `.load game.js` to load the contents of this file.
// Then create a Game instance and run commands like so:
// let game = new Game(3, 3, 3);
// game.playMove(0, 1);
// game.playMove(1, 2);
// When done run `.exit`
import { Board } from './board';

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

// class Game {
//     constructor(numberOfRows, numberOfColumns, numberOfBombs) {
//         this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
//     }

//     playMove(rowIndex, columnIndex) {
//         this.board.flipTile(rowIndex, columnIndex);

//         if (this.board.playerBoard[rowIndex][columnIndex] === 'B') {
//             console.log('Game is Over');
//             this._board.print();

//         } else if (this.board.hasSafeTiles()) {
//             console.log('Current Board: ');
//             this._board.print();

//         } else {
//             console.log('Congratulation on winning! Below is your winning board: ');
//             this._board.print();
//         }
//     }
// }