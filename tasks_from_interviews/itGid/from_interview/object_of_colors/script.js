// https://www.youtube.com/watch?v=zY9Wn4MCAoI&list=PLM7wFzahDYnGmYXTzmw-vTE9tSm8qr5cY&index=4

const array = [{color: 'white', id: 2},
                {color: 'white', id: 22}, 
                {color: 'black', id: 39}, 
                {color: 'black', id: 4},
                {color: 'black', id: 7},
                {color: 'black', id: 7},
                {id: 4}, 
                {color: 'black'},
            ];

let output = {};

function setObj (arr) {
    arr.forEach(obj => {
        // if keys don't exist
        if(!('id' in obj) || !('color' in obj)) return;
        // if the key does not exist
        if(!(obj.color in output)) {
            output[obj.color] = {[obj.id]: obj};
            // check same id     
        } 
            // if the result object has the same id and the same color, it will be overwritten            
        output[obj.color][obj.id] = obj;              
    });
    console.log(output);
    console.table(output);
}

function setObjR(arr) {
    let resObj = arr.reduce((res, obj) => {
        // checking the existence of a property called 'id' or 'color' 
        if(('id' in obj) && ('color' in obj)) {
            console.log('obj', obj);
            if(!(obj.color in res)) {
                res[obj.color] = {[obj.id]: obj}
            // check same id     
            } else if(!(obj.id in res[obj.color])) {
                res[obj.color][obj.id] = obj;              
            }
        }
    //     if(('id' in obj) && ('color' in obj)) 
    //         console.log('obj', obj);
    //         if(!(obj.color in res)) {
    //         // check same id     
    //         } else if(!(obj.id in res[obj.color])) {
    //             res[obj.color][obj.id] = obj;              
    //         }
    //     }
        return res;
    }, {});
    console.log(resObj);
}
function setObjRS(array) {
    const resObj = array.reduce((resObj, obj) => {
        // console.log('{...resObj}', {...resObj});
        return ({...resObj, [obj.color]: {...resObj[obj.color], [obj.id]: obj}})    
    }, {});
    console.log(resObj);
}
setObj(array);
// setObjR(array);
setObjRS(array);