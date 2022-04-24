// ### Плоский массив

// Напишите функцию, принимающая массив с вложенными массивами и
//  распакуйте в результирующий плоский массов. 
// В результате должны получить новый одномерный массив.

// **Input**: Array

// **Output**: Array
// my solution
function flatten(array) {
    if(!Array.isArray(array)) return array;
    let res = [];
    array.forEach(item => {
        res = res.concat(flatten(item));
    });
    return res;
}

console.log(flatten([[1], [[2, 3],[[4,5]]], [[[[4]]]]])) // -> [1, 2, 3, 4]
// console.log([[1], [[2, 3]], [[[4]]]]);


