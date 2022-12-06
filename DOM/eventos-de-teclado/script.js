const li = document.querySelector("ul li")
function apertou() {
    li.innerHTML = "Apertou"
}
function segurou() {
    li.innerHTML = "Segurou"
}

function soltou() {
    li.innerHTML = "Soltou"
}


document.addEventListener('keyup', soltou)