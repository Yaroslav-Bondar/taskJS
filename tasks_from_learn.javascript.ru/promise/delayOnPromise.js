// https://learn.javascript.ru/promise-basics#zaderzhka-na-promisah
// Встроенная функция setTimeout использует колбэк-функции. Создайте альтернативу, 
// использующую промисы.
// Функция delay(ms) должна возвращать промис, который перейдёт в 
// состояние «выполнен» через ms миллисекунд, так чтобы мы могли добавить к нему .then:

function delay(ms) {
  return new Promise(function(resolve, reject) {
    setTimeout(resolve, ms)
  })
}

delay(3000).then(() => console.log(`выполнилось через 3 секунды`));