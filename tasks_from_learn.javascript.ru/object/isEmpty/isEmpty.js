// https://learn.javascript.ru/task/is-empty
// Проверка на пустоту
// важность: 5
// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// Должно работать так:

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false

// my answer
function isEmpty(obj) {
    let count = 0
    for (const key in obj) {
        count++
    }
    return count > 0 ? false : true
}

let schedule = {};
console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";
console.log( isEmpty(schedule) ); // false

// or from https://telegra.ph/Answer-09-08-3
// Ответ:
// const isEmpty = (object) => Object.keys(object).length === 0;
// let schedule = {};
// console.log(isEmpty(schedule)); // true

// schedule['8:30'] = 'get up';
// console.log(isEmpty(schedule)); // false

// Обьяснение:
// Если кол-во ключей обьекта равняется нулю - обьект пустой,  иначе обьект не пустой.

// or from https://learn.javascript.ru/task/is-empty
// Просто в цикле перебираем свойства объекта и возвращаем false, как только встречаем свойство.

// function isEmpty(obj) {
//   for (let key in obj) {
//     // если тело цикла начнет выполняться - значит в объекте есть свойства
//     return false;
//   }
//   return true;
// }



