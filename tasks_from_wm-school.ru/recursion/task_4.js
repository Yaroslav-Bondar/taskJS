// https://wm-school.ru/js/js_functions_1.php

// Цифры числа справа налево
// Дано натуральное число N. Выведите все его цифры по одной, в обратном порядке, разделяя их пробелами. Например:
// N = 89652 → 2 5 6 9 8
let count = 0
function num(n) {
    if(count > n.toString().length - 1) return
    console.log(n.toString().split('').reverse()[count])
    count++
    num(n)
}
// num(89652)
// num(54321)
num(321587)