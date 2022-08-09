function getCalculator(num) {
    // since num is being reference with in other functions inside getCalculator(),
    // JS engine will create a new scope called closure scope, shared across all
    // functions defined inside the getCalculator() function
    const calci = {};
    calci.add = (x) => (num += x);
    calci.subtract = (x) => (num -= x);
    calci.multiply = (x) => (num *= x);
    calci.divide = (x) => (num /= x);
    calci.toString = () => `num = ${num}`;
    return calci;
}

let c = getCalculator(100);
console.log('' + c);
c.add(12);
console.log('' + c);
c.multiply(5);
console.log('' + c);
c.subtract(10);
console.log('' + c);
c.divide(2);
console.log('' + c);
