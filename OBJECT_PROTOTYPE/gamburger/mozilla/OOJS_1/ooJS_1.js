// OOJS 1

// In this task we provide you with a constructor. We want you to:

//     Add a new method to the Shape class's prototype, calcPerimeter(), which calculates its perimeter (the length of the shape's outer edge) and logs the result to the console.
//     Create a new instance of the Shape class called square. Give it a name of square and a sideLength of 5.
//     Call your calcPerimeter() method on the instance, to see whether it logs the calculation result to the browser DevTools' console as expected.
//     Create a new instance of Shape called triangle, with a name of triangle and a sideLength of 3.
//     Call triangle.calcPerimeter() to check that it works OK.

// Try updating the live code below to recreate the finished example:
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Test_your_skills:_Object-oriented_JavaScript
function Shape(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
}
Shape.prototype.calcPerimeter = function() {
    console.log('Perimeter = ', this.sides * this.sideLength)
    return this.sides * this.sideLength
}
function Square(name, sides, sideLength) {
    Shape.call(this, name, sides, sideLength)
}
// Square.prototype = Shape.prototype 
Square.prototype = Object.create(Shape.prototype)
Object.defineProperty(Square.prototype, 'constructor', {  //определяет новое или изменяет существующее свойство непосредственно на объекте, возвращая этот объект.
    value: Square,
    enumerable: false, // false, чтобы данное свойство не появлялось в цикле for in
    writable: true 
});
let sq = new Square('square', 4, 3)
sq.calcPerimeter()
console.log(sq.name)
console.log(sq.sideLength)
      