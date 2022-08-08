'use strict';

let names = [
    'Vinod',
    'Shyam',
    'Kishore',
    'Kiran',
    'Rajesh',
    'Ramesh',
    'Kumar',
    'Krunal',
];

// use of forEach function in an array
names.forEach(function (name, index) {
    // console.log('my callback is called with', arguments);
    console.log('my callback is called with', name, 'at index', index);
});

let nums = [12, 23, 34, 56, 67, 78, 819, 293, 484, 23, 4, 7, 821];
// use Array.filter() to filter unwanted data
// the callback must return true/false; the element for which true was returned will be collected in the output

// let evenNums = nums.filter(function (n) {
//     return n % 2 === 0;
// });

let evenNums = nums.filter((n) => n % 2 === 0);
let oddNums = nums.filter((n) => n % 2);
let alternateNums = nums.filter((n, i) => i % 2 === 0);
console.log('even numbers are:', evenNums);
console.log('odd numbers are:', oddNums);
console.log('alternate numbers are:', alternateNums);

// print all names starting with letter 'k' ignoring the case
console.log(names.filter((name) => name.toLowerCase().startsWith('k')));
