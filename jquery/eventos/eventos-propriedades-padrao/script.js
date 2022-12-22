// OUTRA FORMA DE COLOCAR EVENTOS
// TALVEZ A MELHOR
function eventoDoBotao(e){
    e.preventDefault()
    alert(e.type)
}


$('#botao').bind('click', function(e){
    e.preventDefault()
    let txt = $('#nome').val()

    alert(`Você digitou ${txt}`)
})

$('#botao').bind('mouseout', eventoDoBotao)