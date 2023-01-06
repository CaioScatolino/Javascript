$(function() {

$('.botao').bind('click', function(){
    $('.div').slideUp('slow')
    $('.div').slideToggle('slow')
})

$('.hellobar').bind('click', function(){
    $(this).slideUp()
})

})