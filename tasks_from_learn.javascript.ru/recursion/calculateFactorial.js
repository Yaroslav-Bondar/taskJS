//  https://learn.javascript.ru/task/factorial

function factorial (n) {
    if(n == 1) {
        n = 1
        
    }
    else {
        n = n * factorial(n - 1)
    }
    console.log(n)
    return n
}
factorial(3)