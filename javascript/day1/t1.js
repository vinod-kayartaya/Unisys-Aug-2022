function sayHello() {
    console.log('Hello, ' + this.username);
}

user = { username: 'Vinod' };

// sayHello.bind(user).call();
const sayHelloUser = sayHello.bind(user);
sayHelloUser();

function greet(username) {
    console.log('Hello, ' + username);
}

// greet.apply(null, 'Vinod Kumar');
console.log(Math.max.apply(null, [10, 20, 30, 33, 12, 22]));
console.log(Math.max(10, 20, 30, 33, 12, 22));
