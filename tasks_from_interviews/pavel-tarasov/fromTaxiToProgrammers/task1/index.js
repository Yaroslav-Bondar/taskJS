// General algorithm:
// 1 - get free adjacent seats and their total cost in each of the rows, sorted by row number in ascending order
// 2 - sort free adjacent seats by total price and row number in ascending order
// 3 - get all the cheapest seats in the farthest row 
// 4 - sorting places in the farthest row by location to the center in descending order
// 5 - return the cheapest seat in the farthest row closest to the center
/**
 * Checks if there are adjacent seats in the row
 */
function isNeighbors(arr) {
  let odd = []; 
  let even = [];
  let isOdd, isEven;
  arr.forEach((item, index) => {
    if(index % 2 == 0) even.push(item);
    else odd.push(item);
  }); 
  isOdd = odd.every(x => x == -1);
  isEven = even.every(x => x == -1);
  if(isOdd || isEven) return false;
  return true;
}
// 1 - get free adjacent seats and their total cost in each of the seats, 
// sorted by row number in ascending order
function getAdjacentSeats(data) {
  /**
   * Available adjacent seats (numbering from left to right) in rows. 
   * Sorted by line number in ascending order.
   * Format: ['row number', 'seat number', 'seat number', 'total price', 'row center index'].
   */
  let seats = [];
  // row iteration
  for(let i = 0; i < data.length; i++) {
    if(!isNeighbors(data[i])) continue;
    // seats (row) iteration
    for(let j = 0; j < data[i].length; j++) {
      let firstPrice = data[i][j];
      let secondPrice = data[i][j + 1];
      if(firstPrice != -1 && secondPrice != -1 && secondPrice != undefined) {
        const totalPrice = firstPrice + secondPrice;
        const rowCenter = Math.floor(data[i].length / 2);
        seats.push([i, j, j + 1, totalPrice, rowCenter]);
      }
    }
  }
  if(seats.length) return seats;
  return null;
} 
/**
 * Main calling function
 */
function searchTickets(data) {
  let seats = getAdjacentSeats(data);
  if(!seats) return 'Bad day :(';
  // 2 - sort free adjacent seats by total price and row number in ascending order
  // console.log('seats:', seats);
  seats.sort((a, b) => a[3] - b[3]);
  // console.log('sorted seats by price', seats);
  // 3 - get all the cheapest seats in the farthest row
  let cheapestFarthestSeats = seats.filter((item, index, arr) => item[0] == arr[0][0] && item[3] == arr[0][3]);
  // console.log('cheapestFarthestSeats', cheapestFarthestSeats);
  // 4 - sorting places in the farthest row by location to the center in descending order
  cheapestFarthestSeats.sort((a, b) => {
    let centerDistanceA, centerDistanceB;
    if(a[2] <= a[4]) centerDistanceA = a[2] - a[4];
    else centerDistanceA = a[4] - a[1];
    
    if(b[2] <= b[4]) centerDistanceB = b[2] - b[4];
    else centerDistanceB = b[4] - b[1];
    
    return centerDistanceB - centerDistanceA;
  });
  // console.log('cheapestFarthestSeats', cheapestFarthestSeats);
  // 5 - return the cheapest seat in the farthest row closest to the center
  const result = `(${cheapestFarthestSeats[0][0]}, ${cheapestFarthestSeats[0][1]}) (${cheapestFarthestSeats[0][0]}, ${cheapestFarthestSeats[0][2]}) ${cheapestFarthestSeats[0][3]}`;
  return result;
}

console.log(searchTickets([
  [3, 2, 1],
  [-1, -1, 4],
  [-1, 3, 5],
  // экран
])); // => "(0, 1) (0, 2) 3"

console.log(searchTickets([
  [1, 2, 1],
  [-1, -1, 4],
  [1, 2, 4],
  // экран
])); // => "(0, 0) (0, 1) 3"

console.log(searchTickets([
  [3, 2, 5, 1, 1],
  // [1, 1, 3, 2, 5, 1, 1, 1, 1],
  [-1, -1, 4, 2, 1],
  [-1, 3, 1, 1, 5],
  // экран
])); // => "(0, 3) (0, 4) 2"

console.log(searchTickets([
  [-1, 1, -1, 2, -1],
  [-1, -1, 4, -1, 1],
  [2, -1, 5, -1, 1],
  // экран
])); // => "Bad day :("

console.log(searchTickets([
  [3, 2, 2, 4, 5, 3],
  [1, 1, 1, 1, 1, 1],
  [1, 3, 5, -1, 1, -1],
  [2, -1, 5, 1, 3, -1],
  [1, 3, 4, 1, 1, -1],
  // экран
])); // => "(1, 2) (1, 3) 2"

console.log(searchTickets([
  [1, 1, 1, -1],
  [1, 1, 1, 1, 1, 1],
  [1, 3, 5, -1, 1, -1],
  [2, -1, 5, 1, 3, -1],
  [1, 3, 4, 1, 1, -1],
  // экран
])); // => "(1, 2) (1, 3) 2"