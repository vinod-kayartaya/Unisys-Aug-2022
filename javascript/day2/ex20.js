'use strict';

function Person(name, city = 'Bangalore') {
    this.name = name;
    this.city = city;
    this.getName = function () {
        return this.name;
    };
}

// Person.prototype is an object
// by default, has only the constructor Person()
// we can add any additional members (such as methods)
Person.prototype.print = function () {
    console.log('Name = %s', this.name);
    console.log('City = %s', this.city);
    console.log();
};

let p1 = new Person('Vinod');
let p2 = new Person('Shyam', 'Shivamogga');

console.log(Person.prototype);
console.log(p1);
console.log(p2);

p1.print(); // runtime binding of print() to the p1
// inside the print() method, "this" refers to "p1"
p2.print();
