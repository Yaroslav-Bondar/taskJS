// task: https://techiedelight.com/practice/?problem=ZeroSum
// solution: https://www.techiedelight.com/check-subarray-with-0-sum-exists-not/
// '''
// Given an integer array, check if it contains a contiguous subarray having zero-sum.

// Input : [3, 4, -7, 3, 1, 3, 1, -4, -2, -2]
// Output: True
// Explanation: The subarrays with zero-sum are

// [3, 4, -7]
// [4, -7, 3]
// [-7, 3, 1, 3]
// [3, 1, -4]
// [3, 1, 3, 1, -4, -2, -2]
// [3, 4, -7, 3, 1, 3, 1, -4, -2, -2]

// Input : [4, -7, 1, -2, -1]
// Output: False
// Explanation: The subarray with zero-sum doesn't exist.

// '''

// class Solution:
// 	def hasZeroSumSubarray(self, nums: List[int]) -> bool:
// 		# Write your code here...
// 		return

function zeroSum(arr) {
    const zeroSum = new Array();
    let nextIndex, prevIndex, sumSubArr, sumArr = 0;
    for (let i = 0; i < arr.length; i++) {
        // check array zero-sum;
        sumArr += arr[i];
        nextIndex = i + 1;
        prevIndex = i;
        sumSubArr = arr[prevIndex] + arr[nextIndex];
        // check subarray zero-sum;
        while(nextIndex < arr.length) {
            if(sumSubArr === 0) {
                zeroSum.push(arr.slice(prevIndex, nextIndex + 1));
                // console.log('iteration = ', i, arr.slice(prevIndex, nextIndex + 1));
                break;
            } else {  // sumSubArr != 0
                nextIndex++;
            }
            sumSubArr += arr[nextIndex]; 
        }
    }
    // sum of whole array
    if(sumArr === 0) zeroSum.push(arr);
    console.log(zeroSum);
    return zeroSum.length ? true : false;
}

console.log(zeroSum([3, 4, -7, 3, 1, 3, 1, -4, -2, -2]));  // true
console.log(zeroSum([4, -7, 1, -2, -1])); // false