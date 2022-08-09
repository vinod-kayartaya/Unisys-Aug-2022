'use strict';

function Person(firstname, lastname, city = 'Bangalore') {
    this.firstname = firstname;
    this.lastname = lastname;
    this.city = city;
}

Person.prototype.getFullname = function () {
    return this.firstname + ' ' + this.lastname;
};

Person.prototype.print = function () {
    console.log('Name = %s', this.getFullname());
    console.log('City = %s', this.city);
};

let p1 = new Person('Vinod', 'Kumar');
p1.print();

// inheritance in prototypical object oriented programming
function Employee(id, firstname, lastname, city, email, salary) {
    Person.call(this, firstname, lastname, city);
    this.id = id;
    this.email = email;
    this.salary = salary;
}

// Employee.prototype = Person.prototype
Employee.prototype = new Person();
Employee.prototype.constructor = Employee;
Employee.prototype.print = function () {
    console.log('Id   = %d', this.id);
    console.log('Name = %s', this.getFullname());
    console.log('City = %s', this.city);
    console.log('Sal  = %d', this.salary);
};
let e1 = new Employee(7788, 'John', 'Doe', 'Dallas', 'johndoe@xmpl.com', 34500);
e1.print();
