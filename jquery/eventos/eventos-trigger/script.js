// OUTRA FORMA DE COLOCAR EVENTOS
// TALVEZ A MELHOR

$('#btn1').bind('click', function(){
    alert("Clicou no Botão 1")
    $('#btn2').trigger('click')
})


$('#btn2').bind('click', function(){
    alert("Deu trigger no botão 2")
})
