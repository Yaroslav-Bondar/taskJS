// https://www.youtube.com/watch?v=ssigrf5zHUg&t=4087s
function uniquePoints(arr) {
    console.time('Execution Time');
    for (let i = 0; i < arr.length; i++) {
        // if the element is not removed
        if(arr[i]) {
            for (let j = i+1; j < arr.length; j++) {
                if(arr[j]) {
                    if(arr[i].x === arr[j].x && arr[i].y === arr[j].y) 
                        delete arr[j];
                }
            }        
        }
    }
    const clearCoords = arr.filter(item => item);
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

