function soltou(event) {
    console.log(event.code) // mostra a key que foi apertada (com key)
    if(event.code === "ShiftLeft") {
        console.log("Você apertou Shift Esquerdo")
    } else {
        console.log("Não é o Shift Esquerdo")
    }

    console.log(event.key) // mostra a key (sem key), porém mais simplório
    console.log(`SHIFT? ${event.shiftKey}`)
}

const input = document.querySelector('input')
input.addEventListener('keyup', soltou)