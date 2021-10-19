// https://t.me/js_test/563
// Создайте класс FormatError, который наследует от встроенного класса SyntaxError.

// Класс должен поддерживать свойства message, name и stack.

class FormatError extends SyntaxError {
    constructor(message) {
        super(message);
    }
    name = "FormatError";
    // stack = this.stack;
    // stack = (new Error()).stack;
}
let se = new SyntaxError()
let fe = new FormatError('formatError');
// console.log(SyntaxError.prototype.toString());
// console.log(FormatError.prototype.toString());
// console.log(se.stack)
console.log(fe.message)
console.log(fe.stack)
console.log(fe.name)
console.log(fe instanceof SyntaxError)
console.log(fe instanceof FormatError)
// console.log(typeof se.stack)
// console.log(SyntaxError.prototype.constructor)
// console.log(typeof Error.prototype.stack)
