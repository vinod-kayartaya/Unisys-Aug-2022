export const add = function () {
    let sum = 0;
    for (let index in arguments) {
        let arg = arguments[index];
        if (typeof arg === 'number') {
            sum += arg;
        }
    }
    return sum;
};

export function subtract(num1, num2) {
    return num1 - num2;
}

// ONLY ONE DEFAULT EXPORT PER MODULE

// const square = function (num) {
//     return num * num;
// };
// export default square;

export default function square(num) {
    return num * num;
}
