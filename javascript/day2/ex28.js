function createEmployee(params) {
    // since these local variables are being referenced in the member functions of "emp",
    // a copy of these will be kept in the "closure" scope.

    let { id, name, salary } = params;

    if (!id || typeof id !== 'number') {
        throw Error('id is required and must be a number');
    }

    const emp = {};
    emp.print = function () {
        console.log('Id     : %d', id);
        console.log('Name   : %s', name);
        console.log('Salary : %d', salary);
    };
    emp.setSalary = function (newSalary) {
        if (typeof newSalary !== 'number') {
            throw Error('Salary must be a number');
        }
        if (newSalary < salary) {
            throw Error('Salary must be >=' + salary);
        }
        // update the "salary" in the closure scope
        salary = newSalary;
    };
    emp.getId = () => id;
    emp.getName = () => name;
    emp.getSalary = () => salary;
    emp.setName = (newName) => (name = newName);

    return emp;
}

const e1 = createEmployee({ id: 12, name: 'John Doe', salary: 25000 });
e1.salary = 56000; // doesn't affect the private member salary; adds a new property which is never used by methods of e1
e1.setSalary(45000);
e1.print();
