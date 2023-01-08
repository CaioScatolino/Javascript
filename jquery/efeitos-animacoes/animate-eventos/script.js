$(function() {

$('.botao').bind('click', function(){
    $('.div').animate({
        'font-size': 29
    }, {
        duration: 1500,
        complete: function(){
            console.log('Animação Finalizada')
        },
        start: function(){
            console.log("Animação Iniciada")
        },
        step:function(){
            console.log("Nova etapa . . .")
        }
    })
})



})