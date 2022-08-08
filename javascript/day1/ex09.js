'use strict';

// object structuring

let firstname = 'Vinod',
    lastname = 'Kumar',
    email = 'vinod@vinod.co';

// pre-es6
// let p1 = { "firstname": firstname, "lastname": lastname, "email": email };
let p1 = { firstname: firstname, lastname: lastname, email: email };

console.log(p1);
// es6 onwards
let p2 = { firstname, lastname, email, city: 'Bangalore' };
console.log(p2);

// object destructuring

let emp1 = {
    fullname: 'Rahul',
    department: 'ADMIN',
    salary: 35000,
    grade: 'B',
};

// pre-es6
// let fullname = emp1.fullname,
//     department = emp1.department,
//     salary = emp1.salary,
//     grade = emp1.grade;

// es6
let { fullname, grade, city } = emp1;
console.log(fullname, grade, city);
