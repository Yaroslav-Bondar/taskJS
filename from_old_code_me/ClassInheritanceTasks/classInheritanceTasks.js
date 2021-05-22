// Реализуйте класс Student (Студент), который будет наследовать от класса User, подобно тому, как это сделано в 
// теоретической части урока. Этот класс должен иметь следующие свойства: 
// name (имя, наследуется от User),
// surname (фамилия, наследуется от User),
// year (год поступления в вуз). 
// Класс должен иметь метод getFullName() (наследуется от User), с помощью которого можно вывести 
// одновременно имя и фамилию студента.
// Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5).
// Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.

// Вот так должен работать наш класс:

// var student = new Student('Иван', 'Иванов', 2018);

// console.log(worker.name); //выведет 'Иван'
// console.log(worker.surname); //выведет 'Иванов'
// console.log(worker.getFullName()); //выведет 'Иван Иванов'
// console.log(worker.year); //выведет 2018console.log(worker.getCourse()); //выведет 3 - третий курс, так как текущий год 2021

// Вот так должен выглядеть класс User, от которого наследуется наш Student:

// class User {
// 	constructor(name, surname) {
// 		this.name = name;
// 		this.surname = surname;
// 	}

// 	getFullName() {
// 		return this.name + ' ' + this.surname;
// 	}
// }
function User (name, surname, year) {
    this.name = name
    this.surname = surname
    this.year = year
    // this.getFullName = function() {
    //     console.log(this.name + ' ' + this.surname)
    //     return this.name + ' ' + this.surname
    // }
}
User.prototype.getFullName = function() {
    console.log(this.name + ' ' + this.surname)
    return this.name + ' ' + this.surname
}

function Student (name, surname, year) {
    User.call(this, name, surname, year)  // объединения в цепочку конструкторов
    // this.__proto__ = User.prototype
    // this.year = year
}
Student.prototype.getCourse = function() {
    let date = new Date().getFullYear
    console.log('Course ', date - this.year)
    return 'Course ' + date - this.year
}
// Student.prototype = User.prototype
let user = new User("Go", 'wea', 12)
// user.getFullName()
let student = Object.create(user)
// let student = new Student('Yasa', 'SA', 2017)
// student('Vasya', 'Tiplo', 2017)
student.getFullName()
console.log(student.year)
// student.getCourse()
// let student = Object.create(User)
// console.log(student.__proto__)
// console.log(Object.getPrototypeOf(Student))
// for (const key in student) {
//     console.log(key)
// }
console.log(Object.keys(student))
