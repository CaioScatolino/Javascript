// Maneira sem factory
// let person = {
//     name: 'Caio',
//     lastname: 'Scatolino',
//     age: 90
// }

// Maneira com Factory
function createPerson(name, lastName, age) {
    return {
        name,
        lastName,
        age,
        getFullName() { 
            return `${this.name} ${this.lastName}`
        },
    }
} 

let person1 = createPerson('Caio', 'Scatolino', 90)
let person2 = createPerson('Junior', 'Estebes', 120)


console.log(person1.getFullName())
console.log(person2.getFullName())