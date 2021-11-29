
// https://learn.javascript.ru/task/default-arguments
/* options содержит настройки меню: width, height и т.п. */
let options = {
    width: 340,
    height: 50,
}
function Menu(options) {
    // options.width = options.width || 300; // по умолчанию ширина 300
    // ...
    let newOptions;
    newOptions = Object.create(options);
    console.log(newOptions);
    console.log(newOptions.width);
    newOptions.width = 3;
    console.log(newOptions.width);
    console.log(options);
}
Menu(options);

let newMenu = new Menu(options);
console.log(newMenu);