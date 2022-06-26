function sequence(val = 0, step) {
    let gen = 0;
    return () => !gen ? gen += val : gen && !step ? gen += 1 : gen && step ? gen += step : true; 
}

const generator = sequence(10, 3);
const generator1 = sequence(11);
const generator2 = sequence(7, 1);

console.log(generator());
console.log(generator());
console.log(generator2());
console.log(generator());
console.log(generator1());
console.log(generator1());
console.log(generator2());