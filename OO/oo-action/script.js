class Person  {

    // variáveis comuns
    age = 0
    steps = 0

    // construtor 
    constructor(name) {
        this.name = name
    }
    
    //ações

    takeAStep() {
        this.steps++
    }

    setAge(newAge) {
        if(typeof newAge == 'number'){
        this.age = newAge
        }else {
            console.log("Idade não aceita, só numero")
        }
    }
}

let p1 = new Person("João")
let p2 = new Person("Maria")
let p3 = new Person("Pedro")

p1.takeAStep()
p1.takeAStep()
p1.takeAStep()

console.log(`Passos de ${p1.name}: ${p1.steps}`)

p1.setAge("aa")
console.log(p1.age)

