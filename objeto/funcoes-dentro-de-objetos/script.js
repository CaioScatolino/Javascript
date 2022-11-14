let personagem = {
    nome: 'Bonieky',
    classe: 'Guerreiro',
    idade: 90,
    pais: 'Brasil',
    status: {
        forca: 20,
        magia: 5
    },
    guilda: 'Bonde do Forró',
    nomeEGuilda: function() {
        return `${this.nome} da ${this.guilda}`
    }
}
function verificaClass() { 
if (personagem.classe == 'Guerreiro') {
    personagem.status.forca += 30
} else {
    personagem.status.magia += 35
}
console.log(`O personagem ${personagem.nome} tem ${personagem.idade} anos,
 tem ${personagem.status.forca} de força e ${personagem.status.magia} de magia`)
}

verificaClass()

console.log(personagem.nomeEGuilda())





