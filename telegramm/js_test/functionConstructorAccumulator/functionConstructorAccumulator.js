// Напишите функцию-конструктор Accumulator(val).
// Объект, который она создаёт, должен уметь следующее:
// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается
// в аргументе конструктора val.
// Метод read принимает один параметр(число) и прибавляет его к свойству value.

function Accumulator(val) {
    this.value = val;
    // option 1
    // this.read = item => {this.value = this.value + item;};
}
// option 2
Accumulator.prototype.read = function(item) {this.value += item;};

const accum = new Accumulator(1)
console.log(accum.value)
accum.read(2)
accum.read(5)
console.log(accum.value)

// answer: https://telegra.ph/Answer-09-10
