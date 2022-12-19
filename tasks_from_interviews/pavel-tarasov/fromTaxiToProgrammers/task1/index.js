// General algorithm:
// 1 - get free adjacent seats and their total cost in each of the rows, sorted by row number in ascending order
// 2 - sort free adjacent seats by total totalPrice and row number in ascending order
// 3 - get all the cheapest seats in the farthest row 
// 4 - sorting places in the farthest row by location to the center in descending order
// 5 - return the cheapest seat in the farthest row closest to the center

// 1 - get free adjacent seats and their total cost in each of the seats, 
// sorted by row number in ascending order
function getAdjacentSeats(data) {
  /**
   * Available adjacent seats (numbering from left to right) in rows. 
   * Sorted by line number in ascending order.
   */
  let seats = [];
  // row iteration
  for(let i = 0; i < data.length; i++) {
    // seats iteration
    for(let j = 0; j < data[i].length - 1; j++) {
      let firstPrice = data[i][j];
      let secondPrice = data[i][j + 1];
      if(firstPrice != -1 && secondPrice != -1) {
        const totalPrice = firstPrice + secondPrice;
        seats.push({
          row: i,
          seat_1: j,
          seat_2: j + 1,
          totalPrice,
        });
      }
    }
  }
  if(seats.length) return seats;
  return null;
}

// 2 - sort free adjacent seats by total totalPrice and row number in ascending order
// 3 - get all the cheapest seats in the farthest row
// 4 - sorting places in the farthest row by location to the center in descending order
function sortSeats(a, b, data) {
  // sort by price in ascending order
  if(a.totalPrice != b.totalPrice) return a.totalPrice - b.totalPrice;
  // sort by row in ascending order
  if(a.row != b.row) return a.row - b.row;
  // sort by location to the center in descending order
  if(a.totalPrice == b.totalPrice) {
    const rowCenter = Math.floor(data[a.row].length / 2);
    let centerDistanceA, centerDistanceB;

    if(a.seat_2 <= rowCenter) centerDistanceA = rowCenter - a.seat_2;
    else centerDistanceA = a.seat_1 - rowCenter;

    if(b.seat_2 <= rowCenter) centerDistanceB = rowCenter - b.seat_2;
    else centerDistanceB = b.seat_1 - rowCenter;
    
    if(centerDistanceA < centerDistanceB) return -1;
    if(centerDistanceA > centerDistanceB) return 1;
    if(centerDistanceA == centerDistanceB) return 0;
  }
}
// 5 - return the cheapest seat in the farthest row closest to the center
function getOutput(arr) {
  const result = `(${arr[0].row}, ${arr[0].seat_1}) (${arr[0].row}, ${arr[0].seat_2}) ${arr[0].totalPrice}`;
  return result;
} 
/**
 * Main calling function
 */
function searchTickets(data) {
  let seats = getAdjacentSeats(data);
  if(!seats) return 'Bad day :(';
  seats.sort((a, b) => {
    return sortSeats(a, b, data);
  });
  return getOutput(seats);
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
  [1, 1, 1, 1, 1, -1],
  [1, 1, -1, 1, 1, 1],
  [1, 3, 5, -1, 1, -1],
  [2, -1, 5, 1, 3, -1],
  [1, 3, 4, 1, 1, -1],
  // экран
])); // => "(0, 2) (0, 3) 2"