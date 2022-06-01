// https://www.youtube.com/watch?v=ssigrf5zHUg&t=1918s
function fillArr(arr, len) {
    if(arr.length >= len) return;
    const arrLength = len - arr.length;
    // solution 1
    // for (let i = 0; i < arrLength; i++) {
    //     arr.push(0);
    // }
    // solution 2
    arr.push(...new Array(arrLength).fill(0));
}

const arr = [2, 6, 8];


fillArr(arr, 10);

console.log(arr);