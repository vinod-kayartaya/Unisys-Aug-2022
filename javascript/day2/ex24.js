'use strict';

let p1 = {
    firstname: 'Vinod',
    lastname: 'Kumar',
    greet: function (timing = 'morning') {
        console.log(
            'Hello %s %s, Good %s',
            this.firstname,
            this.lastname,
            timing
        );
    },
};

p1.greet();
p1.greet('evening');

let p2 = { firstname: 'Shyam', lastname: 'Sundar' };
// p2.greet();
p1.greet.apply(p2, ['afternoon']); // greet() is defined in p1, and inside that "this" refers to "p1", but by calling the apply() we are changing the context (context switch) to "p2". Inside greet, now "this" is same as p2

// parameters for greet() can be supplied as an array
p1.greet.apply({ firstname: 'Suresh', lastname: 'Rao' }, ['evening']);
