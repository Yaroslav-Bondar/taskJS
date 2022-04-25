function isStringRotated(source, test) {
    if(source.length != test.length) return false;
    const sourceSort = source.split('').sort().join('');
    const testSort = source.split('').sort().join('');
    return sourceSort == testSort;
}

console.log(isStringRotated('javascript', 'scriptjava')) // -> true
console.log(isStringRotated('javascript', 'iptjavascr')) // -> true
console.log(isStringRotated('javascript', 'java')) // -> false