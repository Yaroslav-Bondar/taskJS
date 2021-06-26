// https://wm-school.ru/js/recursion_functions_exercises.php
// Получите целые числа в диапазоне
// Напишите программу на JavaScript, чтобы получить целые числа в диапазоне (x, y).

// Пример: диапазон (10, 18)
// Ожидаемый результат: [11,12,13,14,15,16,17]

let arr = []
function whole(x, y) {
    if (x >= y - 1) return
    arr.push(x += 1)
    whole(x, y)
    return arr
}
// console.log(whole(10, 18))
console.log(whole(2, 100))
