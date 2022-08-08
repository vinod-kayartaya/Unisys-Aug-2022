'use strict';

function cb1(emp) {
    console.log('Employee details:');
    console.log('Fullname: ', emp.fullname);
    console.log('Salary  : Rs.', emp.salary);
    console.log('Department: ', emp.department);
}

getEmployee(12, cb1);
getEmployee(234, function (e) {
    console.log(
        '%s earns %d as salary and works with %s department',
        e.fullname,
        e.salary,
        e.department
    );
});
getEmployee(234, (e) =>
    console.log(
        '%s earns %d as salary and works with %s department',
        e.fullname,
        e.salary,
        e.department
    )
);

// a simulation of a more complex function to retrieve data from the database
function getEmployee(id, callbackFn) {
    if (typeof callbackFn !== 'function') {
        throw Error('callback was not a function');
    }
    // consider the data being retrieved from a data source like DB or file etc
    // this  may involve accessing files, or network etc
    // which adds a significant delay, and we do not want a call to this function
    // blocking resources.

    // So, instead of returning a value after it is avilable, we get a function as a
    // parameter, and we will invoke that function after the data is available
    let emp = {
        id,
        fullname: 'Kishore Kumar',
        salary: 45000,
        department: 'ADMIN',
    };
    // now that the data is available after sometime,
    // we are going to pass the same to the callback function
    callbackFn(emp);
}
