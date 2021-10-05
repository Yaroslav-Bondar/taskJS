// task:
// ./task.jpg
// В простых случаях циклических ссылок мы можем исключить свойство,
//  из-за которого они возникают, из сериализации по его имени.
// Но иногда мы не можем использовать имя, так как могут быть и другие, 
// нужные, свойства с этим именем во вложенных объектах. Поэтому можно проверять свойство по значению.
// Напишите функцию replacer для JSON-преобразования, которая удалит свойства, ссылающиеся на meetup 
// info:
// https://learn.javascript.ru/json
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#example_of_using_replacer_parameter


"use strict";

let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}]
};

meetup.place = room;       // meetup ссылается на room
room.occupiedBy = meetup; // room ссылается на meetup
meetup.self = meetup

function replacer(k, v) {
    // excluding circular references
    return (k == 'self' || k == 'occupiedBy') ? undefined : v;
}

let result = JSON.stringify(meetup, replacer);
console.log(result)

