class Person {

    // variáveis comuns
    age = 10 

    // construtor 
    constructor(name) {
        this.name = name
    }

    sayHi() {
        console.log(`${this.name} diz "Oi"`)
    }
}

class Student extends Person {

    constructor(name, id) {
        super(name) // executa a função construtor do pai
        this.id = id

    }

    sayHello() {
        super.sayHi()
    }
}

let p1 = new Student('João', 1)
p1.age = 20
p1.id = 7
console.log(`${p1.name} tem ${p1.age} anos e a matricula é #${p1.id}`)

p1.sayHello()
