// https://learn.javascript.ru/task/filter-anagrams 

// Отфильтруйте анаграммы
// важность: 4

// Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.

// Например:

// nap - pan
// ear - are - era
// cheaters - hectares - teachers

// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

// Например:

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"

// Из каждой группы анаграмм должно остаться только одно слово, не важно какое.

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
const aclean = arr => {
    const set = new Set();
    let resArr = [];
    arr.forEach(str => {
        const sortStr = str.split('').sort().join('').toLowerCase();
        if(!set.has(sortStr)) {
            resArr.push(str);
            set.add(sortStr);
        }
    });
    return resArr;
}

console.log(aclean(arr));