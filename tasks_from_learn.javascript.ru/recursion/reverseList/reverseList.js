// https://learn.javascript.ru/task/output-single-linked-list-reverse
// Вывод односвязного списка в обратном порядке
// важность: 5

// Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

// Сделайте два решения: с использованием цикла и через рекурсию.

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList(l) {
    if(l.next) printList(l.next);
    console.log(l.value);
}
printList(list);