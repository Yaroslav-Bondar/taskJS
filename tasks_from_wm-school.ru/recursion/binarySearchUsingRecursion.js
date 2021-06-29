// https://wm-school.ru/js/recursion_functions_exercises.php
// 8. Двоичный поиск с использованием рекурсии

// Напишите программу на JavaScript для двоичного поиска.

// Двоичный (бинарный) поиск (также известен как метод деления пополам) — классический алгоритм поиска элемента в отсортированном массиве (векторе), использующий дробление массива на половины. Используется в информатике, вычислительной математике и математическом программировании.

// Пример массива: [0,1,2,3,4,5,6]
// Ожидаемый результат: document.writeln(l.br_search (5)) вернет «5»
let array = [0,1,2,3,4,5,6]
// console.log(Math.round(array.length / 2 - 1))
function bs(arr, s) {
    let midIndex = Math.round(arr.length / 2 - 1)
    let leftIndex, rightIndex, f
    
    // let len_2 = arr.length / 2 
    while(arr[midIndex] != s) {
        if(arr[midIndex] < s) {
            leftIndex = midIndex
            rightIndex = arr.length - 1
            midIndex = Math.round(rightIndex - leftIndex / 2)
        }
        else if(arr[midIndex] > s) {
            leftIndex = 0
            rightIndex = midIndex
            midIndex = Math.round(rightIndex - leftIndex / 2)            
        }
        if (arr[midIndex] === s) f = arr[midIndex]
    }
    return f
}
console.log(bs(array,4))