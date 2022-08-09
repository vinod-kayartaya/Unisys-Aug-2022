'use strict';

let nums1 = [10, 20, 30];
let nums2 = [11, 22, 33];

// Combines two or more arrays.
// This method returns a new array without modifying any existing arrays.
let nums3 = nums1.concat(nums2);

console.log(nums1);
console.log(nums2);
console.log(nums3);

let p1 = { firstname: 'Vinod', lastname: 'Kumar', city: 'Bangalore', age: 48 };

// get only keys
console.log(Object.keys(p1));
// get only values
console.log(Object.values(p1));

// iterate over keys and get values
for (let key in p1) {
    console.log(key, '-->', p1[key]);
}

let strNums = nums3.join(', ');
console.log(strNums);
console.log('type of strNums', typeof strNums);

// Returns an iterable of key, value pairs for every entry in the array
let itr = nums1.entries();
console.log('itr.next() ==>', itr.next());
console.log('itr.next() ==>', itr.next());
console.log('itr.next() ==>', itr.next());
console.log('itr.next() ==>', itr.next());

// using for loop to iterate over entries of an array
itr = nums2.entries();
for (let entry = itr.next(); !entry.done; entry = itr.next()) {
    console.log(entry.value);
}

// using for-each loop to iterate over entries of an array
// let [index, value] --> array destructuring
for (let [index, value] of nums3.entries()) {
    console.log(index, '-->', value);
}
