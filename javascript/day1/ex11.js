'use strict';

function getDob() {
    return [20, 1, 1974];
}

// array destructing
let [d, m, y] = getDob();

console.log('My date of birth is %d/%d/%d', d, m, y);
