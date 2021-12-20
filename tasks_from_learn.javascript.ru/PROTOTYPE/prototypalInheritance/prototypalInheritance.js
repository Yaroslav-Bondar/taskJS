/*
Прислал Владислав Аткишкин

Допиши код так, чтобы Leopard унаследовал от Cat все методы.

Сделай так, чтобы у Leopard метод sayMeow возвращал 'Roar!' А метод
getPet у Leopard должен возвращать ту строку, возвращает метод у Cat, и
кроме этого устанавливать леопарду, у которого был вызван метод, в поле
mood значение 'счастлив'.

Обрати внимание: использование ключевого слова class запрещено.
Наследование нужно реализовывать через прототипы.
*/

function Cat(name) {
    this.name = name
}

Cat.prototype.sayMeow = () => {
    console.log('Meow!   Meow!   Meow!')
    return 'Meow!   Meow!   Meow!';
};

Cat.prototype.getPet = () => {
    console.log('Purrrrr')
    return 'Purrrrrr';
};
let cat = new Cat('Vasya')

// console.log(typeof Cat)
function Leopard(name) {
    // this.
    this.__proto__ = Cat.prototype
    this.getPet = function () {
        console.log('Pusssss')        
    }
}
// Leopard.prototype.getPet = () => {
//     console.log('Pusssss')
//     return 'Pussss';
// };
// Leopard.__proto__ = Cat
let leo = new Leopard('Leo')
// leo.__proto__ = cat
// leo.sayMeow = function () {
//     console.log('Roar!')
//     return 'Roar!';
// }
for (const key in leo) {
    // if (Object.hasOwnProperty.call(object, key)) {
    //     const element = object[key];
        
    // }
    console.log('LeoKey = ', key)
}
// console.log(leo.__proto__.__proto__)
// cat.getPet()
// leo.getPet()
// console.log(cat.name)
console.log(leo.name)
// leo.sayMeow()

function Cat(name) {
    this.name = name
}

Cat.prototype.sayMeow = () => {
    console.log('Meow!   Meow!   Meow!')
    return 'Meow!   Meow!   Meow!';
};

Cat.prototype.getPet = () => {
    console.log('Purrrrr')
    //return 'Purrrrrr';
};
function Leopard(name) {
	Cat.call(this, name);
}
Leopard.prototype.sayMeow = () => {
    console.log('Roar!  Roar!   Roar!')
    //return 'Meow!   Meow!   Meow!';
}
Leopard.prototype.getPet = function() {
	Cat.prototype.getPet();
    this.mood = 'happy';
}
Object.setPrototypeOf(Leopard.prototype, Cat.prototype);
let cat = new Leopard('leo');
console.log(cat.name)
cat.sayMeow();
console.info(cat.mood);
cat.getPet();
console.info(cat.mood);
console.info(Leopard.prototype);