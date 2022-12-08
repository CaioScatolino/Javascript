class Person {

    cidade = 'Barueri'

    constructor(name, age) {

        this.name = name
        this.age = age
    }
}

let p1 = new Person('Pedro', 22)
let p2 = new Person('Maria', 30)
let p3 = new Person('João', 33)

console.log(p1.age)

p1.age = 3

console.log(p1.age)
console.log(p1.cidade)