$(function() {

$('#btn1').bind('click', function(){
    $('.div').animate({
        'margin-left': "+=50" //somar 50 ao numero atual
    }, 1000)
        
    })

$('#btn2').bind('click', function(){
    $('.div').animate({
        'margin-left': "-=50"
    }, 1000)
})
})

