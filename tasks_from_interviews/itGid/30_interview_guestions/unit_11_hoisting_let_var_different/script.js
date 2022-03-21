var a = 'hello';

function b() {
    // console.log('b = ', b);
    // console.log('a = ', a); 
    if(false) {
        var a = 'world';
    } else {
        var b = 'man';
    }
    console.log('b = ', b);
    console.log('a = ', a); 
}

b(); //?