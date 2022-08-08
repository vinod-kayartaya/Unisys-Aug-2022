'use strict';

function getEmployee() {
    return {
        fullname: 'Ravi Kiran',
        salary: 45000,
        department: 'ACCOUNTING',
    };
}

let { fullname, salary } = getEmployee();

console.log(fullname, 'earns Rs.', salary);
