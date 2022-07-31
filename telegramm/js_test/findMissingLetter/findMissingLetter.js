// task : write a findMissingLetter function that 
// takes an array of characters alphabetically, and returns the missing letter.
// decision by source : https://telegra.ph/Answer-07-19-6

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const findMissingLetter = (arr) => {
    const startValue = arr[0];
    const endValue = arr[arr.length - 1];
    const isUpperCase = /[A-Z]/.test(startValue);
    const source = arr.join('');
    const reference = alphabet.match(new RegExp(`[${startValue}-${endValue}]`, 'gi')).join('');
    let missing = reference.match(new RegExp(`[^${source}]`, 'gi'));
    if(missing) {
        missing = missing.join('');
        return isUpperCase ? missing.toUpperCase() : missing;
    } else {
        return null;
    }
}
console.log(findMissingLetter(['a','b','c','d','f']));
console.log(findMissingLetter(['O','Q','S']));
console.log(findMissingLetter(['O','P']));
console.log(findMissingLetter(['O']));
// console.log('empty');
// console.log(findMissingLetter([]));

// next : lowercase or uppercase 
// https://stackoverflow.com/questions/1027224/how-can-i-test-if-a-letter-in-a-string-is-uppercase-or-lowercase-using-javascrip 
