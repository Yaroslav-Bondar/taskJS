// http://old.code.mu/tasks/javascript/advanced/prodvinutaya-rabota-s-funkciyami-javascript.html
// 7. Сделайте функцию, которая считает и выводит количество своих вызовов.

// func(); //выведет 1
// func(); //выведет 2
// func(); //выведет 3
// func(); //выведет 4

function count() {
    let i = 1
    return function () {
        return i++
    }
}
let func = count()
console.log(func())
console.log(func())
console.log(func())