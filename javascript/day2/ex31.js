function callbackFn() {
    console.log('Callback function called!');
}
const duration = 500;

console.log('start of script');
// setTimeout(callbackFn, duration);
const id = setInterval(callbackFn, duration);
console.log('end of script');

setTimeout(() => {
    clearInterval(id);
}, 5000);
