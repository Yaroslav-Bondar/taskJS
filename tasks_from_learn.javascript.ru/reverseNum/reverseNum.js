/*
Функция reverse принимает число, необходимо реализовать функцию так, 
чтобы она возвращала перевернутое число.
*/
function reverse(num) {
    let value = num.toString().split('').sort((a, b) => {
        if(a === '-' || b === '-')
            return 0
        if(a < b)
            return 1
        if(a > b)
            return -1
        if(a === b)
            return 0
    })
    return +value.filter(item => item !== '0').join('')
}

// console.log(reverse(123)); 
// 321
// console.log(reverse(-123)); 
// -321
// console.log(reverse(120));
// 21
console.log(reverse(0));
// 0