const os = require('os');

const cpus = os.cpus();
console.log('There %d CPUs in this computer', cpus.length);
console.log(cpus[0]);
console.log('os.hostname()', os.hostname());
console.log('os.freemem()', os.freemem());
console.log('os.homedir()', os.homedir());
console.log('os.platform()', os.platform());
console.log('os.release()', os.release());
console.log('os.type()', os.type());
