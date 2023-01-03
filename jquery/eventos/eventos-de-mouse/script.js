$(function() {

    $('.botao').bind('mousedown', function(){
        console.log("Você apertou o mouse")
    })

    $('.botao').bind('mouseup', function(){
        console.log('Você soltou o mouse')
    })

    $('.botao').bind('mouseover', function(){
        $(this).addClass('mouseEmCima')
    })

    $('.botao').bind('mouseout', function(){
        $(this).removeClass('mouseEmCima')
    })

})