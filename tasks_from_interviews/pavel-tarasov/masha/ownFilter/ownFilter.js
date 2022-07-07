// write your own array filter
// console.log(filter([1, 3, 2, 4], n => n < 3)); // [1, 2]

const ownFilter = (arr, func) => {
    const filtered = new Array();
    arr.forEach(item => {
        if(func(item)) filtered.push(item);
    });
    return filtered;
} 

console.log(ownFilter([1, 3, 2, 4], n => n < 3)); // [1, 2]
