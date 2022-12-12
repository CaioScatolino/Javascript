class Person {

    // variáveis comuns

    static hands = 2

    age = 10 

    // construtor 
    constructor(name) {
        this.name = name
    }

    sayHi() {
        console.log(`Oi, eu sou ${p1.name} e tenho ${Person.hands} mãos`)
    }


    static sayHello() {
        console.log("Oi")
    }
}

let p1 = new Person("Caio")
p1.sayHi()

Person.sayHello()