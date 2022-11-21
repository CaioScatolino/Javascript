function calcularImovel(metragem, quartos) {
    let m2 = 3000

    switch(quartos) {
        case 1:
            return metragem * 1 * m2

        case 2:
           return metragem * 1.2 * m2

        case 3:
            return metragem * 1.5 * m2

        default:
            console.log("Numero de quartos inválido")
        break
    }
}

let metragem = 2000
let quartos = 2

let preco = calcularImovel(metragem, quartos)
console.log(`O imóvel custa R$ ${preco}`)