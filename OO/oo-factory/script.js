class Person {

    // variáveis comuns

    static hands = 2

    age = 10 

    // construtor 
    constructor(name) {
        this.name = name
    }

}

function createPerson(name, age) {
    let p = new Person(name)
    p.age = age
    return p
}

let p1 = createPerson('Caio', 27)

console.log(`${p1.name} tem ${p1.age} anos`)