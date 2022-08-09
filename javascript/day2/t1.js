let p1 = {
    name: 'Vinod',
    greet: function (time = 'morning') {
        console.log('Hello %s, Good %s', this.name, time);
    },
};

let p2 = {
    name: 'Shyam',
};

p1.greet();
// p2.greet();
p1.greet.apply(p2, ['evening']);
p1.greet.call(p2, 'evening');

function hello() {
    console.log('Hello, %s', this.name);
}

hello.bind(p1)();
