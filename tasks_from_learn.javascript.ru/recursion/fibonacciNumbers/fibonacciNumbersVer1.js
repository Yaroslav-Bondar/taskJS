// solution: 
// 1) fibonacci sequence: https://leetcode.com/playground/UoTsQkfL
// 2) original solution https://javascript.info/recursion#fibonacci-numbers

// my solution  
function fibLoop(n) {
    let start = 0;
    let end = 1;
    let sum = 0;
    for (let i = 2; i <= n; i++) {
        sum = start + end;
        start = end;
        end = sum;
    }
    return sum;
}

// console.log(fib(3)); // 2
// console.log(fib(7)); // 13
// console.log(fib(77)); // 5527939700884757
// console.time('a');
// console.log(fibLoop(3)); // 2
// console.timeEnd('a');
// console.time('b');
// console.log(fibLoop(7)); // 13
// console.timeEnd('b');
// console.log(fibLoop(77)); // 5527939700884757