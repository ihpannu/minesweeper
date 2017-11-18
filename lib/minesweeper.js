'use strict';

var blankLine = '  |   |  ';
console.log(blankLine);
console.log(blankLine);
console.log(blankLine);

var guessLine = '1 |   |  ';
var bombLine = '  | B |  ';
console.log('This is what a board with a guess and a bomb on it would look like:');
console.log(guessLine);
console.log(bombLine);
console.log(blankLine);

var getAverage = function getAverage(num1, num2) {
  var average = (num1 + num2) * 2;
  console.log(average);
};
getAverage(34, 45);