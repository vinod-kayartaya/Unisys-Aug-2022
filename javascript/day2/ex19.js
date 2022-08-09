// this is going to be used as a constructor
// Note the naming convension. Pascal casing!
function Person(name, city) {
    // console.log('Person() called');
    // console.log('this is ', this);
    // add new member variables to the newly constructed object
    this.name = name;
    // console.log('this is ', this);
    this.city = city;
    // console.log('this is ', this);
    this.print = function () {
        console.log('Name =', this.name);
        console.log('City =', this.city);
        console.log();
    };
}

// create an object and initialize the same using Person constructor
// "new" creates a new object and passes that to the Person() constructor
// which receives the same as the "context", referred by an implicit variable
// called "this". Finally the "new Person(..)" expression returns the reference
// to the newly constructed object (same as "this"), which is assigned to p1.
let p1 = new Person('Vinod', 'Bangalore');
let p2 = new Person('Shyam', 'Mumbai');
p1.alert = function () {
    window.alert(this.name + ' is from ' + this.city);
};

console.log(p1);
console.log(p2);
p1.print();
p2.print();
// p1.alert();
// p2.alert();

// console.log('type of p1 is', typeof p1, p1);
// console.log(p1.toString());
