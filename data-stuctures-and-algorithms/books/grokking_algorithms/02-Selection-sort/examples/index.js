"use strict";

// source: https://github.com/egonSchiele/grokking_algorithms/blob/master/02_selection_sort/javascript/02_recursive_selection_sort.js

/**
 * Finds the index of the element with the smallest value in the array
 * @param {Array} array Source array
 * @returns {number} Index of the element with the smallest value
 */

let count = 0,  count2 = 0;

function findSmallestIndex(array) {
  var smallestElement = array[0]; // Stores the smallest value
  var smallestIndex = 0; // Stores the index of the smallest value
  
  for (var i = 1; i < array.length; i++) {
    if(i < 2) count++;
    if (array[i] < smallestElement) {
      smallestElement = array[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
}

/**
 * Sort array by increment
 * @param {Array} array Source array
 * @returns {Array} New sorted array
 */
function selectionSort(array) {
  var sortedArray = [];
  var copyArray = array.slice();
  var length = array.length;

  for (var i = 0; i < length; i++) {
    count2++;
    // Finds the smallest element in the array
    var smallestIndex = findSmallestIndex(copyArray);
    // Adds the smallest element to new array
    sortedArray.push(copyArray.splice(smallestIndex, 1)[0]);
  }

  return sortedArray;
}

const arr = [1, 3, 5, 5, 7, 0, -1, -100, 200]
const sourceArray = [5, 3, 6, 2, 10,];
// const sourtedArray = selectionSort([5, 3, 6, 2, 10]);
console.time()
const sourtedArray = selectionSort(arr);
console.timeEnd()

console.log("Source array - ", arr); // [5, 3, 6, 2, 10]

console.log("New sorted array - ", sourtedArray); // [2, 3, 5, 6, 10]

count++;
console.log(`\nO(${count*count2})`, count, count2)