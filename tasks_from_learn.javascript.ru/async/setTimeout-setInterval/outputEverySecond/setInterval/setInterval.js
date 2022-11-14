function printNumbers(from, to) {
    const idInterval = setInterval(() => {
      console.log(from++); 
      if(from > to) clearInterval(idInterval);
    }, 1000);
}
printNumbers(5, 10);