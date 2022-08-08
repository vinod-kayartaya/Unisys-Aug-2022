'use strict';

// An object is a collection of key/value pairs, enclosed with in curly braces

let p1 = {}; // an empty object; object with no members

let p2 = { name: 'Vinod' };

console.log('p1 is', p1);
console.log('p2 is', p2);
console.log('p2.name is', p2.name);
console.log('p2["name"] is', p2['name']);

// an object can be added with more members by just assigning them with some values
p2.email = 'vinod@vinod.co';
p2['mobile'] = '9731424784';
console.log('p2 is', p2);

let fields = ['name', 'city', 'email', 'mobile'];
for (let i = 0; i < fields.length; i++) {
    console.log('p2[fields[%d]] is %s', i, p2[fields[i]]);
}

// to remove a key/value from an object, use the 'delete' keyword

delete p2.email;
console.log('after deleting email, p2 is', p2);
delete p2['mobile'];
console.log('after deleting mobile, p2 is', p2);
