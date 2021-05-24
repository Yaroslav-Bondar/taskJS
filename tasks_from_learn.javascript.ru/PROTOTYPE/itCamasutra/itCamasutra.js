class Samurai {
    constructor(name) {
        this.name = name
    }
    hello() {
        console.log(this.name)
    }
}
let shogun = new Samurai('Dimych')
console.log(shogun.__proto__.__proto__)
console.log(shogun.__proto__.constructor.__proto__)
console.log(shogun.__proto__.__proto__.__proto__)

// https://www.youtube.com/watch?v=b55hiUlhAzI&t=1790s 

