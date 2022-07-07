// https://www.youtube.com/watch?v=ssigrf5zHUg&t=4087s
function uniquePoints(arr) {
    console.time('Execution Time');
    const set = new Set();
    const clearCoords = [];
    // add coords to set (clearing of duplicates)
    arr.forEach(item => set.add(JSON.stringify(item)));
    // add cleared coords to array 
    set.forEach(item => {
        clearCoords.push(JSON.parse(item));
    });
    console.timeEnd('Execution Time');
    return clearCoords;
}

const arr = [
    {x:5, y:10},
    {x:1, y:15},
    {x:7, y:-5},
    {x:16, y:33},
    {x:1, y:15},
    {x:7, y:-5},
    {x:4, y:12},
]
console.log(uniquePoints(arr));
// [
//     {x:5, y:10},
//     {x:1, y:15},
//     {x:7, y:-5},
//     {x:16, y:33},
//     {x:4, y:12},
// ]