let fruits = ['Maçã', 'Uva', 'Laranja', 'Banana']

fruits.push('Kiwi')

// fruits.pop() // deleta o ultimo
// fruits.shift() // deleta o primeiro

// console.log(fruits.join(', ')) // junta os itens em uma string com o separador que colocar

// console.log(fruits.length)
// console.log(fruits)

fruits.sort() //alfabetica ascendente
fruits.reverse() // inverte a ordem (pode transformar em decrescente)

console.log(fruits)

let cars = [
    {brand: 'Fiat', year: 2022},
    {brand: 'BMW', year: 2018},
    {brand: 'Ferrari', year: 2020},
]

cars.sort((a , b) => {
    // if(a.year > b.year) {
    //     return 1
    // }else if (a.year < b.year) {
    //     return -1
    // }else {
    //     return 0
    // }
    return a.year - b.year
})

console.log(cars)
