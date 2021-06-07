'use strict';

// Возведение в степень
const pow = (base, exponent) => {
    if(typeof base !== "number" || typeof exponent !== "number") {
        throw new TypeError("Value type of the arguments must be a Number"); 
    }
    if(!Number.isSafeInteger(base) || !Number.isSafeInteger(exponent)) {
        throw new RangeError("Value type of the arguments must be less than 9007199254740991 and bigger than -9007199254740991"); 
    }

    return base ** exponent
}

try {
    console.log(pow(2, 4));
    console.log(pow(5, 2));
    console.log(pow(10000000000000000, 3));
} catch(error) {
    console.error(error);
}