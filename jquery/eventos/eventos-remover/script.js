// OUTRA FORMA DE COLOCAR EVENTOS
// TALVEZ A MELHOR

$('button').bind('click', function(){
 $(this).toggleClass('bg')
})

// USANDO UNBIND PARA REMOVER O EVENTO DO CLICK AO DAR DBL CLICK
$('button').bind('dblclick', function(){
    $(this).unbind('click')
})
