'use strict';

let emps = [
    { id: 1122, name: 'Ravi Kiran', salary: 25000, department: 'SALES' },
    { id: 8927, name: 'Harish Kumar', salary: 45000, department: 'MARKETING' },
    { id: 9272, name: 'Rakesh', salary: 12500, department: 'MARKETING' },
    { id: 9474, name: 'Rohit', salary: 48000, department: 'MARKETING' },
    { id: 2834, name: 'Vinay Khanna', salary: 25600, department: 'SALES' },
    { id: 1534, name: 'Vishal Jain', salary: 35750, department: 'SALES' },
];

// not working as of now.
let empsGroup = emps.groupBy((e) => e.department);
console.log(empsGroup);
