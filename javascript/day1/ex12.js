'use strict';

// objects and references

let p1 = {
    fname: 'Vinod',
    lname: 'Kumar',
    address: { city: 'Bangalore', state: 'Karnataka' },
    phones: ['9731424784', '9844083934'],
};

let p2 = p1; // p2 is a new reference to the same object referred by p1
let p3 = { ...p2, gender: 'Male' }; // shallow copy using spread operator

p2.lname = 'Kayartaya'; // changes p1; but not p3
p2.address.country = 'India'; // changes in p1 and p3 as well
p2.phones.pop(); // deletes the last phone in all p1, p2, p3

console.log('p1 is', p1);
console.log('p2 is', p2);
console.log('p3 is', p3);
