// Let's do a harder exercise. In this code, your function receives a parameter data. 
// You must modify the code below based on the following rules:

//     Your function must always return a promise

//     If data is not a number, return a promise rejected 
//     instantly and give the data "error" (in a string)

//     If data is an odd number, return a promise resolved 1
//     second later and give the data "odd" (in a string)

//     If data is an even number, return a promise rejected 2 seconds 
//     later and give the data "even" (in a string)

// Hint: When you code a function returning a promise,
// make sure to always return a promise. Even if you want 
// to handle an error, just return a promise and reject it. 
// You will have more maintenable code like this.

// Hint: use isNaN(data) to check if data is not a number

function job(data) {
    return new Promise((resolve, reject)=> {
        if(isNaN(data)) {
            reject(new Error('error'))        
        }
        else if(data % 2 !== 0) {
            setTimeout(()=> {resolve('odd')}, 1000)
        }
        else {
            setTimeout(()=> {resolve('even')}, 2000)
        }
    })
}

let prom = job('asd')
prom.then( (mes)=> { console.log(mes) },
            (mes)=> { console.log(mes) } )
// prom.catch( (mes)=> { console.log(mes) } )