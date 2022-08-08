'use strict';

// objects and references

let p1 = {
    fname: 'Vinod',
    lname: 'Kumar',
    address: { city: 'Bangalore', state: 'Karnataka' },
    phones: ['9731424784', '9844083934'],
};

let p2 = p1; // p2 is a new reference to the same object referred by p1
let p3 = JSON.parse(JSON.stringify(p2)); // deep copy

// p3 is unaffected by any of the following
p2.lname = 'Kayartaya';
p2.address.country = 'India';
p2.phones.pop();

console.log('p1 is', p1);
console.log('p2 is', p2);
console.log('p3 is', p3);
