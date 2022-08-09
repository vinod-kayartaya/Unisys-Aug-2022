let p1 = {
    name: 'Vinod',
    sayHello: function (greet = 'Hello', timing = 'morning') {
        console.log(`${greet} ${this.name}. Good ${timing}!`);
    },
};

let p2 = { name: 'John doe' };
let p3 = { name: 'Ravi' };

// apply takes 2 arguments
// 1. object that is going replace the invoking object
// 2. an array of values which are going to be passed as arguments to the invoked function
p1.sayHello.apply(p2);
p1.sayHello.apply(p2, ['Hi', 'evening']);
p1.sayHello.apply(p3, ['Hola', 'afternoon']);

// call takes variable length arguments
// the first one is always the context object
// second onwards will be the parameters for the invoking function
p1.sayHello.call(p3, 'Hola', 'afternoon');
