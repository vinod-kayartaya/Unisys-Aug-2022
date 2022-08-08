// programming constructs - if/else

function maxDays(year, month) {
    if (!year || !month) {
        throw Error('Both year and month are required');
    }

    if (typeof year !== 'number' || typeof month !== 'number') {
        throw Error('Both year and month must be numbers');
    }

    if (year < 1) {
        throw Error('Year must be >= 1');
    }
    if (month < 1 || month > 12) {
        throw Error('Month must be between 1 and 12');
    }

    if (month === 2) {
        return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
            ? 29
            : 28;
    } else if ([4, 6, 9, 11].includes(month)) {
        return 30;
    }

    return 31;
}

// console.log(maxDays());
// console.log(maxDays(2022));
// console.log(maxDays(2022, 'dfg'));
// console.log(maxDays('asd', 8));
// console.log(maxDays('asd', 'dfg'));

console.log(maxDays(2022, 8));
console.log(maxDays(2022, 2));
console.log(maxDays(2024, 2));
console.log(maxDays(2024, 4));
console.log(maxDays(2024, 12));
