'use strict';

let maxDays = getMaxDays(2024, 2);
console.log('Max days in 2/2024 is', maxDays);

function getMaxDays(year, month) {
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

    switch (month) {
        case 2:
            return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
                ? 29
                : 28;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        default:
            return 31;
    }
}
