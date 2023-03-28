let list = {
  value: 201,
  next: {
    value: 10,
    next: {
      value: 40,
      next: {
        value: 2,
        next: {
          value: 200,
          next: {
            value: 202,
            next: null
          }
        }
      }
    }
  }
};
// const list = {
//   value: 5,
//   next: null
// }

/**
 * Finds the maximum value in the list.
 * @param {object} list - An object representing a list.
 * @returns {number} The maximum value in the list.
 */
function max (list) {
  let max = list.value
  
  /**
   * Stores the current maximum value in a list.
   * @param {object} list - An object representing a list.
   * @returns {undefined}
   */
  function getValue (list) {
    if(list.value > max) max = list.value
    if(list.next === null) return
    getValue(list.next)
  }
  
  if (list.next) getValue(list.next)

  return max
}

console.log(max(list))