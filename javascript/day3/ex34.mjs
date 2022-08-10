// import { add, subtract as sub } from './calci.mjs';

// no curly braces while importing the default exported member
// import sqr from './calci.mjs';

import square, { add, subtract as sub } from './calci.mjs';

console.log(add(10, 20, 30, 40, 'asd', false, 50));
console.log(sub(123, 34));
console.log(square(124));
