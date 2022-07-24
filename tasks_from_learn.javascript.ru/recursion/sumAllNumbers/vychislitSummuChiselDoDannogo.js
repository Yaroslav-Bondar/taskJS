// https://learn.javascript.ru/recursion#vychislit-summu-chisel-do-dannogo
// loop
// function sumTo(n) {
//     let sum = 0
//     for (let i = 1; i <= n; i++) {
//         sum += i
//     }
//     console.log(sum)
// }
// recursion
function sumTo(n) {
    if (n == 1) {
        console.log(n)
        return 1
    }
    else {
        n = n + sumTo(n-1)
        console.log(n)
        return n
    }
}
// Arithmetic progression
// function sumTo(n) {
//     if (n == 1) {
//         console.log(n)
//         return 1
//     }
//     else {
//         n = n * (n + 1) / 2
//         console.log(n)
//         return n
//     }
// }
sumTo(3)
