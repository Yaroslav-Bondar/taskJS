console.log(({}).prototype);
console.log(({}).__proto__);
console.log(({}).prototype === ({}).__proto__); // false

// function ITKamasutra() {};
// console.log(ITKamasutra.prototype);
// console.log(ITKamasutra.__proto__);
// console.log(ITKamasutra.prototype === ITKamasutra.__proto__);

function ITKamasutra() {};
function ITIncubator() {};

console.log(ITKamasutra.__proto__ === ITIncubator.__proto__);
console.log(ITKamasutra.prototype === ITIncubator.prototype);

let Component = (props) => {
	return 'dfd';
}
console.log(Component.prototype);
console.log(Component.prototype === Object.prototype);

let age = 18;
console.log(age.prototype);
console.log(age.__proto__);
console.log(Number.prototype);
console.log(String.prototype);
/* console.log('d'.fontcolor('red')) */
console.log((4).toString());
console.log(new Number(4).toString());
console.log(age.prototype === Number.prototype);  //false
console.log(age.__proto__ === Number.prototype);

console.log('-------------');
console.log(Object.getPrototypeOf(NaN).__proto__);

class Hacker {};
console.log(Hacker.__proto__ === Function.prototype);

// 1 - false
// 2 -  false
// 3 - true
// 4 - false
// 5 - false
// 6 - false
// 7 - true
// 8 - true
// 9 - Function.prototype
// 10 - Number.prototype
