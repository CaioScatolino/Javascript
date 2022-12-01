function clicou() {

    const input = document.querySelector('#nome')

    console.log(input.getAttribute('value'))

    if(input.hasAttribute('placeholder')) {
        console.log("tem placeholder sim")
    }else {
        console.log("Não tem placeholder")
    }

    input.setAttribute('placeholder', 'Placeholder Alterado')
}

function mostrarSenha() {
    const senha = document.querySelector("#senha")
    const botao = document.querySelector('.botao2')

    if(senha.getAttribute('type') === 'password') {
        senha.setAttribute("type", "text")
        botao.innerText = 'Ocultar Senha'
    }else {
        senha.setAttribute("type", "password")
        
        botao.innerText = "Mostrar Senha"
    }

    
}

let botao = document.querySelector('.botao2')

botao.addEventListener("click", mostrarSenha)
