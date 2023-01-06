$(function() {

$('.botao').bind('click', function(){
    $('.div').fadeToggle('slow')
    $('.botao').fadeTo('fast', '0.8')
    $('.botao').fadeTo('fast', '1')
})

})