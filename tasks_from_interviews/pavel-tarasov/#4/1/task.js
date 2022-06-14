const codeToNumber = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
}

function encode(str) {
    const arr = str.split('');
    // for (let i = 0; i < arr.length; i++) {
    //     if(arr[i] in codeToNumber) {
    //         arr[i] = codeToNumber[arr[i]];
    //     }
    // }
    // solution with map
    const res = arr.map(item => {
        if(item in codeToNumber) {
            return codeToNumber[item];
        } else {
            return item
        }
        // return codeToNumber[item];
    });
    
    return res.join('');
}
console.log(encode('hello'));