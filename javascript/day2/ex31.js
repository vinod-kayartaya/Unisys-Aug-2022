console.log('start of script');

var setDelayedExecution = function (callbackFn, duration) {
    const startTime = Date.now();
    while (Date.now() - startTime <= duration);
    callbackFn();
};

var callbackFn = function () {
    console.log('Callback function called at', new Date());
};
const duration = 5000;
setTimeout(callbackFn, duration);
console.log('end of script');
