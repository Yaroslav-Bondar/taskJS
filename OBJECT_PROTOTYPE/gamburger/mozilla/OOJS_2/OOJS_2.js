// OOJS 2

// Next up we want you to take the Shape class you saw in Task #1 (including the calcPerimeter() method) and recreate it using ES class syntax instead.

// Test that it works by creating the square and triangle object instances as before (using new Shape() for both), and then calling their calcPerimeter() methods.

// Try updating the live code below to recreate the finished example:
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Test_your_skills:_Object-oriented_JavaScript

class Shape {
    constructor(name, sides, sideLength){
        this.name = name
        this.sides = sides
        this.sideLength = sideLength
    }
    calcPerimeter() {
        console.log('Perimeter = ', this.sides * this.sideLength)
    }
}
class Square extends Shape {
    constructor(name, sides, sideLength) {
        super(name, sides, sideLength)
        this.name = 'square'
        this.sides = 4
        // this.sideLength = sideLength
    }
    calcArea () {
        console.log('Area = ', Math.pow(this.sideLength, 2))
    } 
}
let square = new Square('foo', 2, 3)
console.log(square.sideLength)
square.calcArea()
// let square = new Shape('square', 2, 2)
// square.calcPerimeter()
// let triangle = new Shape('triangle', 3, 3)
// triangle.calcPerimeter()