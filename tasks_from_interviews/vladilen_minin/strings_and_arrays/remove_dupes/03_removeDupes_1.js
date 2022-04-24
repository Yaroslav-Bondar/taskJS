// ### Удаление всех повторяющихся значений в строке

// Напишите функцию, которая принимает строку и возвращает новую, в которой все дублирующиеся символы будут удалены.

// **Input**: String

// **Output**: String

function removeDupes(str) {
    const set = new Set(str);
    let res;
    res = Array.from(set).join('');
    return res;   
}
// function removeDupes(str) {
//     return Array.from(new Set(str)).join('');
// }
console.log(removeDupes('abcd')) // -> 'abcd'
console.log(removeDupes('aabbccdd')) // -> 'abcd'
console.log(removeDupes('abcddbca')) // -> 'abcd'
console.log(removeDupes('abababcdcdcd')) // -> 'abcd'