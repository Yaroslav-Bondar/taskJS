// https://www.youtube.com/watch?v=AY9Ta6cKcP0&t=4118s

function add(val) {
    let sum = 0;
    if(val) {
        sum += val;
        return function add2(val2) {
            if(val2) {
                sum += val2;
                return add2;
            } else {
                return sum;
            }
        }
    } else {
        return sum;
    }
}

console.log(add(2)(1)()); // 0
console.log(add(2)()); // 2
console.log(add(2)(1)(3)(3)(3)()); // 12
console.log(add(5)(-1)(2)()); // 6
console.log(add(1)());