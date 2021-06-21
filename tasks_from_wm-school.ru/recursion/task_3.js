// https://wm-school.ru/js/js_functions_1.php

// Сумма цифр числа
// Дано натуральное число n. Вычислите сумму его цифр. При решении этой задачи используйте рекурсию.

let sum = 0
function number (n) {
    if(n === 0) {
        console.log(sum)
        return
    }
    sum += n
    number(n - 1)
}
number(4)
