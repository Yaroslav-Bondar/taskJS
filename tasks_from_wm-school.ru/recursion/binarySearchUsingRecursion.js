// https://wm-school.ru/js/recursion_functions_exercises.php
// 8. Двоичный поиск с использованием рекурсии

// Напишите программу на JavaScript для двоичного поиска.

// Двоичный (бинарный) поиск (также известен как метод деления пополам) — классический алгоритм поиска
// элемента в отсортированном массиве (векторе), использующий дробление массива на половины. 
// Используется в информатике, вычислительной математике и математическом программировании.
// Пример массива: [0,1,2,3,4,5,6]
// Ожидаемый результат: document.writeln(l.br_search (5)) вернет «5»
let array = [0,2,3,4,5,6,7,8,9,11,20,30,35,40,45,50]
// console.log(Math.round(array.length / 2 - 1))
// console.log(Math.round(4 / 2 - 1))
// console.log(array[12])
let longArr = new Array()
for (let i = 0; i < 200; i++) {
    longArr.push(i)
}
function bs(arr, s) {
    let mInd = Math.round(arr.length / 2 - 1)
    let lInd = 0 
    let rInd = arr.length - 1
    while(1) {
        if(arr[mInd] < s) {
            lInd = mInd
            mInd = Math.ceil((rInd + lInd) / 2)
        }
        else if(arr[mInd] > s) {
            rInd = mInd
            mInd = Math.floor((rInd + lInd) / 2)            
        }
        if (arr[mInd] === s) {
            console.log('Index ', mInd, ' Element ', arr[mInd])
            break
        }
        if (mInd === lInd || mInd === rInd && arr[mInd] !== s) {
            console.log('Element not found')
            break
        } 
    }
}
// bs(array, 3)
// console.log(bs(longArr,200))

// recursion
let mInd = Math.round(array.length / 2 - 1)
let lInd = 0 
let rInd = array.length - 1
function bs(arr, s) {
    if(arr[mInd] < s) {
        lInd = mInd
        mInd = Math.ceil((rInd + lInd) / 2)
    }
    else if(arr[mInd] > s) {
        rInd = mInd
        mInd = Math.floor((rInd + lInd) / 2)            
    }
    if (arr[mInd] === s) {
        console.log('Index ', mInd, ' Element ', arr[mInd])
        return
    }
    if (mInd === lInd || mInd === rInd && arr[mInd] !== s) {
        console.log('Element not found')
        return
    }
    bs(arr, s) 
}
bs(array, 35)
