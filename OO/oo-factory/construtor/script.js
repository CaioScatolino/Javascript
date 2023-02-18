// Maneira com Factory
function createPerson(name, lastName, age) {
    return {
        name,
        lastName,
        age,
        getFullName() { 
            return `${this.name} ${this.lastName}`
        },

        start() {
            console.log("Deu start na pessoa")
        }
    }
} 

let person1 = createPerson('Caio', 'Scatolino', 90)
let person2 = createPerson('Junior', 'Estebes', 120)

person1.start()


console.log(person1.getFullName())
console.log(person2.getFullName())