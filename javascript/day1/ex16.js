'use strict';

let emps = [
    { id: 1122, name: 'Ravi Kiran', salary: 25000, department: 'SALES' },
    { id: 8927, name: 'Harish Kumar', salary: 45000, department: 'MARKETING' },
    { id: 9272, name: 'Rakesh', salary: 12500, department: 'MARKETING' },
    { id: 9474, name: 'Rohit', salary: 48000, department: 'MARKETING' },
    { id: 2834, name: 'Vinay Khanna', salary: 25600, department: 'SALES' },
    { id: 1534, name: 'Vishal Jain', salary: 35750, department: 'SALES' },
];

// get only names
let empNames = emps.map((e) => e.name);
console.log('Employee names:', empNames);

// get name and salary of each employee
let empNamesSalaries = emps.map((e) => ({ name: e.name, salary: e.salary }));
console.log('Employee names and salaries:', empNamesSalaries);

// get only names (in uppercase) of employees in MARKETING department

let salesmen = emps
    .filter((e) => e.department === 'MARKETING')
    .map((e) => e.name.toUpperCase());

console.log('Salesmen are', salesmen);

// id to search 9272
// find the element in the array based on a property of the element
let emp9272 = emps.find((e) => e.id === 9272);
console.log(emp9272);

// find the employee with id 9272 and delete the same from the array
// 1. find the index of the element
// 2. use the splice() to delete the element
let index = emps.findIndex((e) => e.id === 9272);
if (index === -1) {
    console.log('No data found for id 9272');
} else {
    emps.splice(index, 1);
}
console.log('After deleting, emps is', emps);
