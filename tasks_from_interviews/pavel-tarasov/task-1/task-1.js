/*
Задача 1
https://youtu.be/GYaZLJQIfrs
Прислал Ярослав.

Напишите функцию, replaceItems(arr, item, replaceItem) которая находит все
элементы массива arr, равные item и возвращает новый массив, в котором на
месте найденных значений стоит replaceItem.
*/

// my solution
function replaceItems(arr, item, replaceItem) {
    const reg = new RegExp(`${item}`, 'g');
    return arr.join('').replace(reg, `${replaceItem}`).split(''); 
}

function replaceItems2(arr, item, replaceItem) {
    return arr.map(el => el === item ? replaceItem : el);
}
// console.log(replaceItems([1,2,3,4,2], 2, 'a')); //  [1,'a',3,4,'a']
console.log(replaceItems2([1,2,3,4,2], 2, 'a')); //  [1,'a',3,4,'a']