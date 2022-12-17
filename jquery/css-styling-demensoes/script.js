$(function() {
$('h1').addClass('fundoVermelho')
$('h1').removeClass('fundoVermelho')

if ( $('h1').hasClass('fundoVermelho')) {
    $('h1').removeClass('fundoVermelho')
}else {
    $('h1').addClass('fundoVermelho')
}

$('h1').css('font-size', '40px').css('color', 'white')

$('button').css('border', '3px solid black').css('background-color', 'red')

// O IDEAL É CRIAR UMA CLASSE NO CSS PARA ADICIONAR PROPRIEDADES
// E DEPOIS DAR UM ADDCLASS

$('input').data('caracteres', $('input').val().length)
})