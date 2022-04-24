// ### Удаление всех повторяющихся значений в строке

// Напишите функцию, которая принимает строку и возвращает новую, в которой все дублирующиеся символы будут удалены.

// **Input**: String

// **Output**: String

function removeDupes(str) {
    const set = new Set();
    let res = '';
    for (const character of str) {
        set.add(character);
    }
    for(const character of set) {
        res += character;
    }
    return res;   
}

console.log(removeDupes('abcd')) // -> 'abcd'
console.log(removeDupes('aabbccdd')) // -> 'abcd'
console.log(removeDupes('abcddbca')) // -> 'abcd'
console.log(removeDupes('abababcdcdcd')) // -> 'abcd'
