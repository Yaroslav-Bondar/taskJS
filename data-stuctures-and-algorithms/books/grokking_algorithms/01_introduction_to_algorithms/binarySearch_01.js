// Task: The binarySearch function receives a sorted array and a value. If a
// value is present in the array, the function returns its position.
const numbers = [1, 4, 5, 7, 9, 8, 10, 199];
const numbers2 = [1, 4, 5, 6, 7, 9, 8, 10, 12, 34, 67, 78, 79, 99, 100, 101, 150, 199]; 
function binarySearch(arr, n) {
    let left = 0;
    let right = arr.length - 1;
    // if element is not in subsequence
    if(n < arr[left] || n > arr[right]) return null;
    let center = Math.floor((right - left) / 2);
    while(arr[center] != n) {
        if(arr[center] < n) {
            // if element is not in subsequence
            if(left == center) return null;
            left = center;
            center = center + Math.round((right - left) / 2);
        } else {
            // if element is not in subsequence
            if(right == center) return null;
            right = center;
            center = center - Math.round((right - left) / 2);
        } 
    };
    return center;
}

console.log(binarySearch(numbers, 200));
// console.log(binarySearch(numbers2, 102));