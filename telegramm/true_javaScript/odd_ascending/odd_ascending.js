// https://t.me/true_js/76
let arr = [7, 3, 4, 9, 5, 2, 17];
// oddSort([7, 3, 4, 9, 5, 2, 17]);
function oddSort(array) {
    let oddArray = [], nativeArray = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 != 0) oddArray.push(array[i]);
    } 
    oddArray.sort((a, b) => a - b);
    for(let i = 0,j = 0; i < array.length; i++) {
        if(array[i] % 2 != 0) {
            // nativeArray[i] = oddArray[j];
            array[i] = oddArray[j];
            j++;
        } 
        // else {
        //     // nativeArray.push(array[i]);
        //     array[i](array[i]);
        // } 
    }
    console.log(oddArray);
    // console.log(nativeArray);
    console.log(array);
}

// answer
// function oddSort(arr) {
//     arr.forEach((item, index) => {
//      if (item % 2 === 1) {
//       let sortNumber = item;
   
//       for (let i = 0; i < index; i++) {
//        if (arr[i] % 2 === 1) {
//         if (arr[i] > sortNumber) {
//          const tmp = sortNumber;
   
//          sortNumber = arr[i];
//          arr[i] = tmp;
//         }
//        }
//       }
//       arr[index] = sortNumber;
//      }
//     });
   
//     return arr;
//    }
   oddSort(arr)