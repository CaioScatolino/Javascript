let fruits = ['Banana', 'Laranja', 'Maçã', 'Pera']

let bigFruits = fruits.filter((item) => {

    return item.length > 4
    // if (item.length > 4) {
    //     return true
    // }else {
    //     return false
    // }
})

console.log(bigFruits)

let ok = fruits.every((value) => {
    return value.length > 3 // se todos os itens forem maior q 3
})

if(ok) {
    console.log("Todos os itens são maiores que 3")
}else {
    console.log("Não são todos os itens que são maiores que 3")
}

let ok2 = fruits.some((value) => value.length > 3)

if (ok2) {
    console.log("Algum item é maior que 3")
}else {
    console.log("Nenhum item é maior que 3")
}

if(fruits.includes('Maçã')) {
    console.log("Tem maçã sim")
} else {
    console.log("Não tem maçã")
}