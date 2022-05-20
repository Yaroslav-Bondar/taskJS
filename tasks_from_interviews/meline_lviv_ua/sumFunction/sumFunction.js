// Напишите функцию сложения вида add(num1)(num2)..
// https:///development/front-end/tasks-core-js/

function sumArgs(sum, item) {
    return sum += item;
}

function addSeveral(...args) {
    let sum = args.reduce(sumArgs,0);

    function forwardSum(...args) {
        if(args.length) {
            sum += args.reduce(sumArgs, 0);
            return forwardSum;    
        } else {
            return sum;
        }
    }
    // forwardSum.toString = (function(){return sum})();
    return forwardSum;
}

console.log(addSeveral()(2,3)(3, 5, 5)());
// console.log(addSeveral(3, 4)(2,3)(3, 5, 5));