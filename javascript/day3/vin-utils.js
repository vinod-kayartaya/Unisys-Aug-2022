module.exports.line = (char = '-', count = 50) => {
    s = '';
    for (let i = 0; i < count; i++) {
        s += char;
    }
    console.log(s);
};
