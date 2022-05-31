// https://www.youtube.com/watch?v=ssigrf5zHUg

function fun(arr) {
    //get max element 
    // it is a resource intensive way
    // const max = arr.sort((a,b) => b - a)[0];
    // this is better, but there is a limit on the number of elements in the function parameters
    // const max = Math.max(...arr);
    // The reduce solution does not have this problem. 
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max?retiredLocale=uk
    const max = arr.reduce((a, b) => {
        return Math.max(a, b);
    }, -Infinity);
    const percent = (10 / max) * 100;
    const res = arr.filter(item => item >= max - percent && item !== max);
    return res;
}

console.log(fun([5, 88, 95, 100, 77, 21, 92]));
console.log(fun([2, 13, 55, 29, 19, 5, -5]));