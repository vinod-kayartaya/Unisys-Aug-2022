'use strict';

// ES6 style of class creation
class Person {
    // constructor to create member variables
    constructor(firstname, lastname, city = 'Bangalore') {
        this.firstname = firstname;
        this.lastname = lastname;
        this.city = city;
    }
    getFullname() {
        return this.firstname + ' ' + this.lastname;
    }
    print() {
        console.log('Name = %s', this.getFullname());
        console.log('City = %s', this.city);
    }
}

let p1 = new Person('Vinod', 'Kumar');
let p2 = new Person('Shyam', 'Sundar', 'Shivamogga');
p1.print();
p2.print();

// ES6 inheritance
class Employee extends Person {
    constructor(id, firstname, lastname, city, salary) {
        // whenever extends is used, call to the super class constructor is a must!
        super(firstname, lastname, city);
        this.id = id;
        this.salary = salary;
    }
    // overrides the inherited print() method from Person class
    print() {
        console.log('Id   = %s', this.id);
        super.print();
        console.log('Sal  = %s', this.salary);
    }
    toString() {
        return `${this.getFullname()} (${this.city}) earns Rs.${
            this.salary
        } as salary`;
    }
}

let e1 = new Employee(7788, 'John', 'Doe', 'Dallas', 23000);
let e2 = new Employee(7654, 'Ravi', 'Kishan', undefined, 23000);
e1.print();
e2.print();

console.log('' + e1);
console.log('' + e2);
