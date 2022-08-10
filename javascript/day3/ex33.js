// nodejs style of including a module is via "require()"

// return value of the "require(..)" function is the value of
// "module.exports" defined in the actual file being imported.

// const mathUtils = require('./math-utils');
// console.log('mathUtils is', mathUtils);
// console.log('factorial of 5 is', mathUtils.factorial(5));
// console.log('square of 5 is', mathUtils.square(5));
// console.log('cube of 5 is', mathUtils.cube(5));

// const factorial = require('./math-utils').factorial;
// const square = require('./math-utils').square;
// const cube = require('./math-utils').cube;

const { factorial, square, cube } = require('./math-utils');

console.log('factorial of 5 is', factorial(5));
console.log('square of 5 is', square(5));
console.log('cube of 5 is', cube(5));
