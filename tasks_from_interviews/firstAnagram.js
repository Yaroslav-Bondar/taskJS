/*
https://jsfiddle.net/mockinterview/xkomqr2z/
Прислал Den Pol, задача с реального собеса.

Дан массив строк arr.
Требуется написать функцию, которая принимает произвольную строку.
Функция должна проверить, существует ли как минимум два значения в
массиве, которые являются анаграммами к переданной в функцию строке,
если такие строки существуют, тогда функция должна вернуть первую
встретившуюся в массиве строку-анаграмму.
В случае если анаграмм в массиве менее 2, необходимо вернуть null.
*/
const arr = ['asfd', 'asd', 'dsa', '1nkil', 'asd', 'fhk', 'lfd', 'khf', 'link', 'link1'];

const getFirstAnagram = (str) => {
    let strSort, anagram = [], tmp, count = 0;
    strSort = str.split('').sort().join('');  // get sort input string
    for (let i = 0; i < arr.length; i++) {
        tmp = arr[i].split('').sort().join('');
        if (tmp == strSort) {
            anagram.push(arr[i]);
        }
        if (anagram.length == 2) {
            break;
        }
    }
    if (anagram.length < 2) {
        console.log('null');
        return null;
    }
    else {
        console.log(anagram[0]);
        return anagram[0];
    }
};
getFirstAnagram('kfh');
// console.log(getFirstAnagram('asd')); // "asd"
// console.log(getFirstAnagram('link')); // null
// console.log(getFirstAnagram('link1')); // "1nkil"