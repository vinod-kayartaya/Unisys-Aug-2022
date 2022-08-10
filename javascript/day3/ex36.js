const fs = require('fs');
const { line } = require('./vin-utils');

line('*', 100);
console.log('start of script');
const fileContent = fs.readFileSync('./vin-utils.js', 'utf-8');
line('=');
console.log(fileContent);
line(undefined, 60);
console.log('end of script');
line();
