// https://javascript.info/recursion#sum-all-numbers-till-the-given-one
function sumTo(n) { 
    if(n == 1) return n;
    let sum = n;
    return sum += sumTo(n-1);
}

console.log( sumTo(100) ); // 5050