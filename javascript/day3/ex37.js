const { line } = require('./vin-utils');
const fs = require('fs');

console.log('start of script');
line();

fs.readFile('./vin-utils.js', 'utf-8', function (err, content) {
    // NodeJS callbacks usually (in most cases) receive two or more parameters,
    // of which, the first one is always the "error" object. If there are no errors,
    // then the error object is equals to undefined.
    // At any point in time, either there is an error or there is a proper response (like data)
    // We always check if there is an error, throw the same: if(err) throw err;

    console.log('Callback function of fs.readFile() is called!');
    console.log('Callback function received %d arguments', arguments.length);

    if (err) throw err;

    console.log(content);
});

console.log('end of script');
line();
