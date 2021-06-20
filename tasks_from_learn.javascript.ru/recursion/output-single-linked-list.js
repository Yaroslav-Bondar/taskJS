let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: {
            value: 5,
            next: null      
          }
        }
      }
    }
  };
 
  function getValue (list) {
    console.log(list.value)
    if(list.next) {
        getValue(list.next)
    }
}
getValue(list)
