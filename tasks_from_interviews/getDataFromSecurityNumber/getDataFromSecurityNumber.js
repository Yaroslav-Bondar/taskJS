/*
Прислал Andriy Oleksievets

Представьте что вы попали на собеседование в Гугл, так-вот у Гугла
очень крутая система защиты от взлома серверов. Каждый сервер
расположен на разном уровне от 0 к N, но не всё так просто чтобы
попасть на N уровень нужно пройти все N-1 уровней защиты. Ваша задача,
как собеседуемого, состоит в том чтобы получить все данные с i-го
уровня защиты.
*/
function getDataFromSecurityNumber(arr, floor) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (floor == 0) {
            if (typeof arr[i] === 'number') 
                res.push(arr[i]);
        }
        if (floor == 1) {
            if (Array.isArray(arr[i])) {
                res.push(...arr[i].filter(item => !Array.isArray(item)))
            }
        }
        if (floor == 2) {

        }
    }
    console.log(typeof arr[0]);
    console.log(res);
}

const arr = [1, 2, 3, [4, 5], [6, [7]], [8, 9]];
getDataFromSecurityNumber(arr, 1);
// console.log(getDataFromSecurityNumber(arr, 0)); // [1, 2, 3]
// console.log(getDataFromSecurityNumber(arr, 1)); // [4, 5, 6, 8, 9]
// console.log(getDataFromSecurityNumber(arr, 2)); // [7]
// console.log(getDataFromSecurityNumber(arr, 3)); // []