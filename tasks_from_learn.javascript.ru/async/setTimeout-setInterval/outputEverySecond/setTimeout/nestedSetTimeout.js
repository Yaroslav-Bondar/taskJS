function printNumbers(from, to) {
    const idTimeout = setTimeout(function print() {
      console.log(from++);
      if(from <= to) setTimeout(print, 1000);
    }, 1000);
}
  
printNumbers(5, 10);