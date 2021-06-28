// https://wm-school.ru/js/recursion_functions_exercises.php
// 4. Вычислите сумму массива целых чисел
// Напишите программу на JavaScript для вычисления суммы массива целых чисел.

// Пример: var array = [2, 3, 4, 5, 6, 7]
// Ожидаемый результат: 27

let array = [2, 3, 4, 5, 6, 7]
// let array = [7]
let i = array.length - 1, sum = 0

function findSum(arr) {
  if(i < 0) return
  sum += arr[i]
  i--
  findSum(arr)
  return sum
}
console.log(findSum(array))