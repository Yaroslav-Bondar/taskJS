const sumArray = arr => arr.reduce((sum, item) => sum += item, 0);

function add(...args) {
    let result = 0;
    if(!args.length) return result;
    
    result += sumArray(args);
    
    return function f(...a) {
        if(a.length) {result += sumArray(a); return f}; 
        return result;  
    }
}
console.log(add()); // 0
console.log(add(2)(1)()); // 3
console.log(add(2)(1, 2)()); // 5
console.log(add(5)(-1)(2, 4, 5)()); // 15
console.log(add(5)(-1)(2, 4)(4)()); // 14