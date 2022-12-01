function clicou() {
    const teste = document.querySelector("#teste")
    const ul = teste.querySelector('ul')

    ul.innerHTML += "<li>Testando 1 </li>" // pega o conteudo que ja tem
}

let botao = document.querySelector('.botao2')

botao.addEventListener("click", clicou)