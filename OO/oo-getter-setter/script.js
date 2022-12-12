class Person {

    // variáveis comuns
    _age = 10
    steps = 0

    // construtor 
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    //ações

    takeAStep() {
        this.steps++
    }

    get age() {
        return this._age
    }

    get name() {
        return `${this.firstName} ${this.lastName}`
    }

    set age(x) {
        if (typeof x == 'number') {
            this._age = x
        }
    }
}

let p1 = new Person("João", "Silva")
let p2 = new Person("Maria", "Souza")
let p3 = new Person("Pedro", "Vargas")

p1.age = 20
console.log(`${p1.name} tem ${p1.age} anos`)


