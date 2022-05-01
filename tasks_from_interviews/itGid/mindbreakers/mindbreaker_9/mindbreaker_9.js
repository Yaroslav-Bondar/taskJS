// https://www.youtube.com/watch?v=OgE3P6kEPz4&list=PLM7wFzahDYnGmYXTzmw-vTE9tSm8qr5cY&index=7
// https://www.freecodecamp.org/news/what-is-the-temporal-dead-zone/


// function one( b, a=b,) {
//     console.log(a, b);
// }

// one(c, undefined);
let b = 1;
// var c = 2;

function one(a=b, b ) {
    console.log(a, b);
}

one(undefined, 2 );
// let b = 1;
var c = 2;