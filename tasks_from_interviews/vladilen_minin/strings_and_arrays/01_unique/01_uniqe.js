// ## Строки и массивы

// ### Уникальность всех символов в строке

// Напишите функцию, которая определяет уникальны ли все символы в строке. Регистр должен учитываться: `‘a’` и `‘A’` разные символы.

// **Input**: String

// **Output**: Boolean

// function isUnique(string) {
// 	// todo
// }

// console.log(isUnique('abcdef')) // -> true
// console.log(isUnique('1234567')) // -> true
// console.log(isUnique('abcABC')) // -> true
// console.log(isUnique('abcadef')) // -> false

function isUnique(str) {
    for(let i = 0; i < str.length; i++) {
        console.log(str[i]);
        for(let j = i+1; j < str.length; j++) {
            console.log(str[j]);
            if(str[i] == str[j]) return false;
        }
    }
    return true;
}

function isUnique2(str) {
    for(let j = 0; j < str.length; j++) {
        if(str.includes(str[j], j+1)) return false;
    }
    return true;
}

function isUnique3(str) {
    const set = new Set(str);
    // return set.size != str.length ? false : true;
    return set.size == str.length;

}
// 'abcdfe'.split('').forEach((item) => {
//     console.log(item)
// })
// console.log(isUnique('abcdef')) // -> true
// console.log(isUnique('1234567')) // -> true
// console.log(isUnique('abcABC')) // -> true
// console.log(isUnique('abcadef')) // -> false

// console.log(isUnique2('abcdef')) // -> true
// console.log(isUnique2('1234567')) // -> true
// console.log(isUnique2('abcABC')) // -> true
// console.log(isUnique2('abcadef')) // -> false

console.log(isUnique3('abcdef')) // -> true
console.log(isUnique3('1234567')) // -> true
console.log(isUnique3('abcABC')) // -> true
console.log(isUnique3('abcadef')) // -> false

