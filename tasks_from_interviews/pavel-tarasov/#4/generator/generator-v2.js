// function sequence(val = 0, step = 1) {
//     return () => val += step;
// }

const sequence = (val = 0, step = 1) => () => val += step;

const gen = sequence();
console.log(gen());
console.log(gen());
console.log(gen());

const gen2 = sequence(10, 3);
console.log(gen2());
console.log(gen2());
console.log(gen2());