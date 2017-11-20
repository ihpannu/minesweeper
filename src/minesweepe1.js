// const blankLine = '  |   |  ';
// console.log(blankLine);
// console.log(blankLine);
// console.log(blankLine);
//
// const guessLine = '1 |   |  ';
// const bombLine =  '  | B |  ';
// console.log('This is what a board with a guess and a bomb on it would look like:');
// console.log(guessLine);
// console.log(bombLine);
// console.log(blankLine);
//
// const getAverage = (num1, num2) => {
//   const average = (num1 + num2) * 2;
//   console.log(average);
// };
// getAverage(34, 45);

// printBoard(board);
// board[0][1] = '1';
// board[2][2] = 'b';
// printBoard(board);



const exBoard = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  const board = [];
  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    const row = [];
    for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
      row.push(' ');
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
  }

  let numberOfBombsPlaced = 0;
  while (numberOfBombsPlaced < numberOfBombs) {
    const randomRowIndex = Math.floor(Math.Random() * numberOfRows);
    const randomColumnIndex = Math.floor(Math.Random() * numberOfColumns);

    board[randomRowIndex][randomColumnIndex] = 'B';

    numberOfBombsPlaced++;
  }

  return board;
};

const printBoard = board => {
console.log(board.map(row => row.join(' | ')).join('\n'));
};


const playerBoard = generatePlayerBoard(3, 3);
const bombBoard = generateBombBoard(3, 2);

printBoard(playerBoard);
