// Elementos

const input = document.querySelector("#nome")
const lista = document.querySelector("#lista")


// Funções
function soltou(event) {
    if(event.code === "Enter") {

        const novoElemento = document.createElement('li')
        novoElemento.innerHTML = input.value

        lista.appendChild(novoElemento)

        input.value = ""
    }
}



// Eventos 

input.addEventListener("keydown", soltou)