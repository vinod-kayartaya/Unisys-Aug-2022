function sleep(duration) {
    console.log('going to sleep for %d ms', duration);
    const begin = Date.now();
    while (Date.now() - begin <= duration);
    console.log('woke up after %d ms', duration);
}

console.log('start of script');

setTimeout(() => console.log('After a timeout of 0 ms'), 0);

sleep(5000);

console.log('end of script');
