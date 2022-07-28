let i = 0;

let start = Date.now();

function count() {

  // перенесём планирование очередного вызова в начало
  if (i < 10) {
    setTimeout(count); // запланировать новый вызов
  }

  do {
    i++;
  } while (i % 10 != 0);

  if (i == 10) {
    console.log("Done in " + (Date.now() - start) + 'ms');
  }

}

count();