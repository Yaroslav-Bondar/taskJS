/**
 * Quick array sorting
 * @param {Array} array Source array
 * @returns {Array} Sorted array
 */
const quickSort = arr => {
  if (arr.length < 2) return arr
  // const midIndex = Math.floor(arr.length / 2) 
  // const mid = arr[midIndex]
  const mid = arr[0]
  // const less = arr.slice(1).filter(item => item <= mid)
  const less = arr.filter(item => item <= mid)
    const greater = arr.filter(item => item > mid)
  // console.log(mid, left, right)
  return [...quickSort(less), mid, ...quickSort(greater)]
}

let arr = [1, 3, 5, 7, 5, 0, -1, -100, 200]

console.time()
console.log(quickSort(arr))
console.timeEnd()
