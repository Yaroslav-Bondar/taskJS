// http://old.code.mu/tasks/javascript/advanced/prodvinutaya-rabota-s-funkciyami-javascript.html
// 12. Сделайте функцию, каждый вызов который будет генерировать случайные числа от 1 до 100,
// но так, чтобы они не повторялись, пока не будут перебраны все числа из этого промежутка. 
// Решите задачу через 
// замыкания - в замыкании должен хранится массив чисел, которые уже были сгенерированы функцией. 
// Скрыть решение.
let max = 11
let min = 0 
function rand() {
    let num = new Array()
    return function() {
        let randNumber = Math.floor(Math.random() * (max - min)) + min;
        if(!num.includes(randNumber)) {
            num.push(randNumber)
        }
        return num
    }
}
let getRand = rand()

while(1) {
    getRand()
    if (getRand().length == max)
        break
}
console.log(getRand())
