function createEmployee(params = {}) {
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

function main() {
    console.log('start of main()');
    try {
        // const e1 = createEmployee();
        const e1 = createEmployee({ id: 123, name: 'Ravi', salary: 30000 });
        // e1.setSalary(24500);
        // e1.setSalary('asd');
        e1.setSalary(34500);
        e1.print();
    } catch (err) {
        console.error('There was an error: ', err.message);
        return; // takes the control away from main, but finally will still be executed!
    } finally {
        console.log('This is executed always!');
    }
    console.log('end of main()');
}

main();
