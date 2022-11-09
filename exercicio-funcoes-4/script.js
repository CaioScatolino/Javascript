function calcPorcentagem(n1, n2) {
    return n1/n2 * 100
}

let n1 = 900
let n2 = 22000
let porcentagem = calcPorcentagem(n1, n2)
console.log(`${porcentagem}% de ${n1} é ${n2} `)