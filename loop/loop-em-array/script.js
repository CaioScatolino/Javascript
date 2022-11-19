let cores = ['azul', 'preto', 'branco', 'vermelho']

let carros = [
    {nome: 'Palio', qt: 10},
    {nome: 'Gol', qt: 20},
    {nome: 'Uno', qt: 15}
]

cores.push('verde')

// for(let n = 0; n < cores.length; n++) {
    
//     console.log(cores[n])

// }

// for (let i in cores) {
//     console.log(cores[i])
// }

for (let cor of cores) {
    console.log(cor)
}

for (let carro of carros) {
    console.log(`Nome: ${carro.nome} tem ${carro.qt}`)
}