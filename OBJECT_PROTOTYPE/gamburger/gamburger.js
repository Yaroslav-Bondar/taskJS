Hamburger.prototype.CONST = [

Hamburger.prototype.SIZE_SMALL = {
    size: 'L',
    price: 50,
    calories: 20,
},
Hamburger.prototype.SIZE_LARGE = {
    size: 'XL',
    price: 100,
    calories: 40,
},
Hamburger.prototype.STUFFING_CHEESE = {
    name: 'cheese',
    price: 10,
    calories: 20,
},
Hamburger.prototype.STUFFING_SALAD = {
    name: 'salad',
    price: 20,
    calories: 3,
},
Hamburger.prototype.STUFFING_POTATO = {
    name: 'potato',
    price: 15,
    calories: 10,
},
Hamburger.prototype.TOPPING_MAYO = {
    name: 'mayo',
    price: 20,
    calories: 2,
},
Hamburger.prototype.TOPPING_SPICE = {
    name: 'pepper',
    price: 15,
    calories: 0,
}
]
// depending on the type of the variable type returns the name 
// of the object property in the CONST array or the object index in the CONST array 
Hamburger.prototype.getProperty = function(prop, type = 1) {     
    this.arr = Hamburger.prototype.CONST
    for (let i = 0; i < this.arr.length; i++) {
        for (const key in this.arr[i]) {
            if(this.arr[i][key] === prop) {
                if(type === 1) {
                    return prop
                }
                else if(type === 0) {
                    return i
                }
                else {
                    console.log('Invalid search type, must be 0 or 1')
                }                
            }
        }
    }
    return null         
} 
function Hamburger(size, stuffing) {
try {
    if (size !== this.getProperty(size)) {
        throw new Error('Wrong gamburger name !!!')
    }
    this.size = size
}
catch (err) {
    console.log(err.name)
    console.log(err.message)
}
try {
    if (null === this.getProperty(stuffing)) {
        throw new Error('Wrong gamburger stuffing !!!')
    }
    this.stuffing = stuffing
}
catch (err) {
    console.log(err.name)
    console.log(err.message)
}

// }
this.toppingList = new Array()      // список добавок
// Добавить добавку к гамбургеру
this.addTopping = function (topping) {
    try {
        if(topping !== this.getProperty(topping)) {
            throw new Error('Wrong topping name !!!')
        }
        if (this.toppingList.includes(topping)) {
            throw new Error(`Topping ${topping} added`)
        }
        this.toppingList.push(topping);
    }    
    catch(err) {
        console.log(err.message)
        return err.message    
    }
    return this
}
this.removeTopping = function(topping) {
    try {
        if(topping !== this.getProperty(topping)) {
            throw new Error('Can not remove - Wrong topping name !!!')
        }
        if(!this.toppingList.includes(topping)) {
            throw new Error(`Can not remove - Topping ${topping} not added`)
        }
        this.toppingList = this.toppingList.filter(item => item != topping)
    }    
    catch(err) {
        console.log(err.message)
        return err.message    
    }
    return this
}
// Узнать размер гамбургера
this.getSize = function() {                 
  	console.log('Size', this.size)
    return this.size 
}
// Узнать начинку гамбургера
this.getStuffing = function() {             
  	console.log('Stuffing', this.stuffing)
  	return this.stuffing
}
// Узнать цену гамбургера
this.price = function() {
    let resPrice = 0
    if (this.toppingList.length > 0) {
        this.toppingList.forEach(item => {
            resPrice += this.CONST[this.getProperty(item, 0)].price
        })
    }
    resPrice += this.CONST[this.getProperty(this.size, 0)].price + this.CONST[this.getProperty(this.stuffing, 0)].price
    console.log('Price = ', resPrice)  
}
// спросим сколько там калорий
this.calories = function() {
    let resCal = 0
    if (this.toppingList.length > 0) {
        this.toppingList.forEach(item => {
            resCal += this.CONST[this.getProperty(item, 0)].calories
        })
    }
    resCal += this.CONST[this.getProperty(this.size, 0)].calories + this.CONST[this.getProperty(this.stuffing, 0)].calories
    console.log('Calories = ', resCal)  
}
}

let gam = new Hamburger('XL', 'salad')
console.log(gam.size)
// gam.getSize()
console.log(gam.stuffing)
// gam.getStuffing()
// console.log(gam.CONST)
gam.addTopping('mayo')
console.log(gam.toppingList)
gam.addTopping('pepper').addTopping('mayo')
console.log(gam.toppingList)
gam.removeTopping('mayo').removeTopping('mayo')
console.log(gam.toppingList)
gam.addTopping('mayo').removeTopping('mayo').removeTopping('pepper1')
gam.price()
gam.addTopping('mayo').removeTopping('mayo')
gam.calories()
// gam.getSize()
