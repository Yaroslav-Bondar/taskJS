// https://wm-school.ru/js/js_functions_2.php
// Ввести пароль
// 
// Создайте замыкание: функция makePassword получает пароль в аргументе и возвращает внутреннюю функцию, которая принимает введенную строку и возвращает булево значение true, если введенная строка совпадает с паролем и faulse – если не слвпадает.
// 
// function makePassword(password) {
    // return /*      ваш код    */ {
        // return (tryPassword === password);
    // };
// }
    // /*      ваш код     */

function makePassword(password) {
    let tryPassword = '1234'
    return function () {
        return (tryPassword === password);
    };
}
let checkPas = makePassword('1234')
console.log(checkPas())    