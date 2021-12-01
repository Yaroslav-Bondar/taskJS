// https://learn.javascript.ru/task/hamster-proto
"use strict";

let hamster = {
  stomach: ['s'],

  eat(food) {
    if(!this.hasOwnProperty('stomach')) {
      this.stomach = [food];
    }
    else {
      this.stomach.push(food);
    }
  }
};

let speedy = {
   __proto__: hamster
};

let lazy = {
  __proto__: hamster
};
// hamster.eat('banana')
// Шустрый хомяк нашёл еду
// speedy.eat("apple");
hamster.eat('luk')
hamster.eat('chiese')
console.log( hamster.stomach );
console.log( speedy.stomach ); 
console.log( hamster.stomach );
speedy.eat("ogirok");
speedy.eat("apple");


console.log( speedy.stomach ); // apple

// Живот ленивого хомяка пуст
lazy.eat("tomato");
lazy.eat("tomato");
console.log( lazy.stomach ); // <ничего>