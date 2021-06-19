let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
 
function getValue (list) {
    if(null) {
        console.log(true)
    }
    else {
        console.log(false)
    }
    // else {
    //     console.log()
    // }
    // console.log(Object.values(list.next)) 
    for (const el in list) {
        if(el === "next" && list[el] === null) {
            return
            // console.log(list[el])
        } else if(el === "value")
            console.log(el)
        else {
            for (const key of el) {
                getValue(key)    
            }
        }
    }
    // getValue(list)  
}
getValue(list)
