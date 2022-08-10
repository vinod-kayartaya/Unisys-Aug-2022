function factorial(num) {
    if (typeof num !== 'number' || num <= 0) {
        throw Error('Bad input');
    }
    let fact = 1;
    while (num) {
        fact *= num--;
    }
    return fact;
}

function square(num) {
    if (typeof num !== 'number') {
        throw Error('Bad input');
    }
    return num * num;
}

function cube(num) {
    return num * square(num);
}

module.exports = {
    factorial,
    cube,
    square,
};
