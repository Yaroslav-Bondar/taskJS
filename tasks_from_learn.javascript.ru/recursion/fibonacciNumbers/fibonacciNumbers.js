// https://learn.javascript.ru/task/fibonacci-numbers

let tmp1 = 1
let tmp2 = 1
let res

// loop
function fib(n) {
    for (let i = 2; i < n; i++) {
            res = tmp1 + tmp2
            tmp1 = tmp2
            tmp2 = res
    }
    return res
}
console.log(fib(77))

// recursion. not verified !!!
// function fib(n) {
//     if (n == 2) return
//     res = tmp1 + tmp2
//     tmp1 = tmp2
//     tmp2 = res
//     fib(n - 1)
//     return res
    
// }
console.log(fib(3));
console.log(fib(77));
