var x = 10;
function bar(funcArg) {
    var x = 30;
    funcArg();
    // foo();
}

function foo() {
    console.log(x);
}

foo.x = 20;
bar.x = 40;

bar(foo); // ?