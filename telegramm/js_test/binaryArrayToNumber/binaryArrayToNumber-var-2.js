// Write a binaryArrayToNumber function that converts an array of zeros and ones 
// to a decimal number (you can't use built-in functions).
// https://t.me/js_test/846

/**
 * raising a number to a power
 * @param {number} x - the base number.
 * @param {number} n -  the exponent to which to raise base. 
 * @returns - a number representing the given base taken to the power of the given exponent.
 */
 function pow(x, n) {
    if(n == 0) return 1;
    return x * pow(x, n - 1);
}
/**
 * converts an array of zeros and ones to a decimal number
 * @param {array} arr - array of zeros and ones
 * @returns - decimal number
 */
function binaryArrayToNumber(arr) {
    console.time('label');
    arr.reverse();
    const decimal = arr.reduce((sum, item, index) => {
        if(item) return sum += pow(2, index);
        // or 
        // if(item) return sum += Math.pow(2, index);
        return sum;
    }, 0);
    console.timeEnd('label');
    return decimal;
}

console.log(binaryArrayToNumber([0, 0, 0, 1])); // 1
console.log(binaryArrayToNumber([0, 0, 1, 0])); // 2
console.log(binaryArrayToNumber([1, 1, 1, 1])); // 15
console.log(binaryArrayToNumber([0, 1, 1, 0])); // 6