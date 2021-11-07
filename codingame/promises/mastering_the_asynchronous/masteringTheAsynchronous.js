// https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/the-last-challenge

let central = require('./central'),
    db1 = require('./db1'),
    db2 = require('./db2'),
    db3 = require('./db3'),
    vault = require('./vault'),
    mark = require('./mark');
module.exports = function(id) {
    let res = 
    // to get data or error from central and db*
    central(id).then(data => data, /*Promise.resolve(data)*/ 
    () => {throw new Error('Error central')}) /*Promise.reject(new Error('Error central'))*/
    
    .then(data => {
        let res;
        if(data == 'db1') {
            res = db1(id).then(data => data, () => {throw new Error('Error db1')}); /*Promise.reject(new Error('Error db1'))*/
        }
        if(data == 'db2') {
            res = db2(id).then(data => data, () => Promise.reject(new Error('Error db2'))); 
        }
        if(data == 'db3') {
            res = db3(id).then(data => data, () => Promise.reject(new Error('Error db3'))); 
        }
        return res;
    }, (er) => {throw er}) /* Promise.reject(er)*/
    
    .then(data => data, er => {throw er} /*console.log('er.message ', er.message)*/);
    // to get data or error from vault
    res2 = vault(id).then(data => data, () => {throw new Error('Error vault' )});  
    // get the result, object or first error from any bd
    // also calls the mark service if no error exist
    return Promise.all([res, res2])
    .then(data => {
        let resultObj = { id: id };
        // data.forEach(elem => {
            // elem
            Object.assign(resultObj, data[0], data[1]);
        // });
        mark(id).then(function() { });
        return Promise.resolve(resultObj) }, 
        er => Promise.reject(er.message)
    );
};
// Reminder: The deadline is tomorrow !