'use strict';
// An array is an object, consisting of other values/objects, enclosed in square brackets

let names = ['Vinod', 'Shyam', 'Naveen', 'Harish', 'Ramesh'];
console.log('type of names is', typeof names);
console.log('names instanceof Array is', names instanceof Array);

// add another element to the end of an array
names.push('Rohit');
names.push('Rajesh', 'Kiran', 'Kishore');
console.log(names);

// add one ore elements to the start of an array
names.unshift('James');
names.unshift('John', 'Jane');
console.log(names);

// we can use a for loop for iterating over an array; SHOULD BE AVOIDED
for (let i = 0; i < names.length; i++) {
    console.log('element at index %d is %s', i, names[i]);
}

console.log('index of "Vinod" in names is ', names.indexOf('Vinod'));
