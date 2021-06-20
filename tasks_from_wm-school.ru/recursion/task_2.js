// https://wm-school.ru/js/js_functions_1.php
// Вывод чисел от a до b
// Даны два целых числа a и b. Выведите все числа от a до b включительно, в порядке возрастания, 
// если a < b, или в порядке убывания в противном случае.

function ab(a, b) {
    if(a === b) {
        console.log(a)
        return
    }
    else if(a < b) {
        console.log(a)
        ab(a + 1, b)
    }
    else if(a > b) {
        console.log(a)
        ab(a - 1, b)
    }
}
ab(3, 19)
// ab(12, 3)