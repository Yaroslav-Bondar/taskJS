/**
 * Calculate the largest number
 * @param {Array} arr - Array of numbers
 * @returns {number} The largest number
 */
function findMax (arr) {
  if (arr.length == 1) return arr[0]
  let max = findMax(arr.slice(1))
  return max > arr[0] ? max : arr[0]
}
console.log(findMax([1, 56, 45, 25, 16, 100])); // 100