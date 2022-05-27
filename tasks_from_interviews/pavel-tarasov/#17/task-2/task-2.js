/*
https://youtu.be/GYaZLJQIfrs
Прислал Алексей Схоменко.

Дан массив вида `[1, 2, [3,4,[5]], 6, 7, [[8]]]`, необходимо получить массив
без вложенных массивов, то есть: `[1, 2, 3, 4, 5, 6, 7, 8]`.
*/

let arr = [1, 2, [3, 4, [5]], 6, 7, [[8]]];

function flatArray(arr) {
    if(!Array.isArray(arr)) {
        return arr;
    }
    let flat = [];
    for (let i = 0; i < arr.length; i++) {
        flat = flat.concat(flatArray(arr[i]));
    }
    return flat;
}

console.log(flatArray(arr));

