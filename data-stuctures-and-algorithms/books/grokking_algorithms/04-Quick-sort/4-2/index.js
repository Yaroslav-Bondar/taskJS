let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: {
          value: 5,
          next: {
            value: 6,
            next: null
          }
        }
      }
    }
  }
};

/**
 * Counts items in a list.
 * @param {object} list - An object representing a list.
 * @returns {number} Number of items in the list.
 */
function count (list) {
  if(list.next === null) return 1
  return 1 + count(list.next)
}

console.log(count(list))