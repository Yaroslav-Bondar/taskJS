// 📁 main.js
import * as user from './users.js';
import {sayHi} from './second.js';
let User = user.default; // экспорт по умолчанию
console.log(user);
console.log(user.sayHi());
console.log(sayHello);
new User('John');