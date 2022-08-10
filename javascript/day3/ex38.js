const fs = require('fs');
const filename = './vin-utilss.js';

console.log('start of script');

fs.access(filename, function (err) {
    if (err) {
        console.log('File does not exist or error while accessing the file!');
    } else {
        fs.readFile(filename, 'utf-8', function (err, content) {
            if (err) {
                console.log('There was an error', err);
            } else {
                console.log(content);
            }
        });
    }
});

console.log('end of script');
