/*
https://www.youtube.com/watch?v=GYaZLJQIfrs&t=552s
https://jsfiddle.net/mockinterview/76o3nbk5/

Прислал Евгений.
В функцию fillArr передается количество строк и количество колонок в массиве, 
необходимо реализовать функцию так, чтоб она возвращала заполненный массив 
размером rows*cols целыми инкрементируемыми числами идущими по спирали против
часовой стрелки.
*/


// clockwise solution
function fillArr(rows, cols) {
  let arr = [];
  const amountElements = rows * cols;
  // first line
  for (let i = 1; i <= amountElements; i++) {
    if(i <= cols) {
      if(!arr[0]) {
        arr.push([i]);
      } else  {
        arr[0].push(i);
      }    
    }
  }
  let side = cols; // far right side max value
  const linesDown = rows - 1; // number of lines after 1 line
  let maxValue = amountElements;  // inside max value

  // lines which starts from 1
  // iterate over rows
  for (let i = 1; i <= linesDown; i++) {
    // odd line
    if(i % 2 != 0) {
      // iterate over columns
      for (let j = cols - 1; j >= 0 ; j--) {
        // if line is empty
        if(!arr[i]) {
          arr[i] = Array();
        }
        // if line 1 (insert maxValue in begin)
        if(i == 1 && j == cols - 2) {
          arr[i][j] = maxValue;
        } else if(j <= cols - 2) {
          arr[i][j] = --maxValue;
        } else {
          // far right side
          arr[i][j] = ++side;
        }
      }  
    }
    else {  // even line
      // iterate over columns
      for (let j = 0; j < cols ; j++) {
        // if line is empty
        if(!arr[i]) {
          arr[i] = [];
        } 
        if(j <= cols - 2) {
          arr[i][j] = --maxValue
        } else {
          // far right side
          arr[i][j] = ++side;
        }
      } 
    }
  }
  return arr;
}

/*
  [
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5],
  ]
*/
console.log(fillArr(3, 4));

/*
  [
    [1,   2,  3, 4],
    [10, 11, 12, 5],
    [9,   8,  7, 6],
  ]
*/
// console.log(fillArr(3, 4));