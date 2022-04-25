// ### Какая строка встречается чаще всего

// Напишите функцию, которая принимает массив строк и возвращает 
// самую частовстречающуюся строку в этом массиве. 
// Если таких строк несколько, то нужно вернуть первую, идя слева на право.

// **Input**: String[]

// **Output**: String

function highestFrequency(array) {
    const map = new Map();
    array.forEach(element => {
        if(!map.has(element)) {
            map.set(element, 1);
        }
        else {
            let currentValue = map.get(element);
            map.set(element, ++currentValue);
        }
    });
    let arr = Array.from(map).sort((a,b) => b[1] - a[1]);
    return arr[0][0];
}

console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e'])) // -> c
console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc'])) // -> abc
console.log(highestFrequency(['abc', 'def'])) // -> abc
console.log(highestFrequency(['abc', 'abc', 'def', 'def', 'def', 'ghi', 'ghi', 'ghi', 'ghi' ])) // -> ghi