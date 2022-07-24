// https://learn.javascript.ru/recursion#vyvod-odnosvyaznogo-spiska

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
    console.log(l.value);
    if(!l.next) return;
    printList(l.next);
}
console.time('label');
printList(list);
console.timeEnd('label');

