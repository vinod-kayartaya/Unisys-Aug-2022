// recursion is a concept where a function calls/invokes itself.
// not a good idea to use; stay away from such code
// JS Engine has only one stack

// const bar = function () {
//     console.log('from inside bar()');
// };

// const foo = function () {
//     console.log('from inside foo()');
//     bar();
// };

// const main = function () {
//     console.log('from inside of main()');
//     foo();
//     bar();
// };
// main();

const factorial = function (num) {
    if (num <= 1) {
        return 1;
    }
    return num * factorial(num - 1);
};

const n = 7;

console.log(`factorial(${n}) is ${factorial(n)}`);
