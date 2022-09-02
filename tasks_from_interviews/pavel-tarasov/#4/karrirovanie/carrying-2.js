// task: https://www.youtube.com/watch?v=AY9Ta6cKcP0&t=4118s
// info: https://learn.javascript.ru/currying-partials

function add(result=0) {
    if(!arguments.length) return result;
    
    return function f(a) {
        if(a) {result += a; return f}; 
        return result;  
    }
}

console.log(add()); // 0
console.log(add(2)(1)()); // 3
console.log(add(5)(-1)(2)()); // 6
console.log(add(5)(-1)(2)(4)()); // 10
