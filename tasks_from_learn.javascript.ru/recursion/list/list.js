// https://learn.javascript.ru/task/output-single-linked-list

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
          // next: {
          //   value: 5,
          //   next: null
          // }
        }
      }
    }
  };
// loop
// let tmp = list;
// while(tmp) {
//   console.log(tmp.value);
//   tmp = tmp.next;
// }

// recursion
// function recList(list) {
//   console.log(list.value);
//   if(!list.next) return
//   recList(list.next);
// }
// recList(list);
// reverse order (recursion)
// function reverseRecList(list) {
//   // console.log(list.value);
//   if(list.next) return list.value
//   // list.value;
//     // return list.value
//     // console.log(list.value);

//   console.log(reverseRecList(list.next)) 
//   // ret list.value
//   // let value = reverseRecList(list.next)
//   // return value;
// }

function printReverseList(list) {

  if (list.next) {
    printReverseList(list.next);
  }

  console.log(list.value);
}

printReverseList(list);

// reverseRecList(list);
