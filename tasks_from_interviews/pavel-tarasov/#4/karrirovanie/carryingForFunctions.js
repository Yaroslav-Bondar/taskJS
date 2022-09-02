// currying for functions
// https://learn.javascript.ru/currying-partials#prodvinutaya-realizatsiya-karrirovaniya

function curry(func) {
    return function curried(...args) {
        if(args.length >= func.length) {
            return func.apply(null, args);
        } else {
            return (...args2) => curried.apply(null, args.concat(args2));
        }
    }    
}

function sum(a, b, c) {
    return a + b + c;
};

const sumCurry = curry(sum);
console.log(sumCurry(2,3,3));
console.log(sumCurry(2)(3)(3));
console.log(sumCurry(2)(3,3));


