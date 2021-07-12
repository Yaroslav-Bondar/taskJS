// https://learn.javascript.ru/task/make-army

// Армия функций
// важность: 5

// Следующий код создаёт массив из стрелков (shooters).

// Каждая функция предназначена выводить их порядковые номера. Но что-то пошло не так…
function makeArmy() {
  let shooters = [];
  for (let i = 0; i <= 10; i++) {
    let shooter = function shooter() {
      console.log(i)
    }
    shooters[i] = shooter
  }
  return shooters;
}

let army = makeArmy();
army[1](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...
army[10]()
// Почему у всех стрелков одинаковые номера? Почините код, чтобы он работал как задумано.