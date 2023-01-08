$(function() {

$('#btn1').bind('click', function(){
    $('.div').animate({
        'margin-left': 500
    }, 2000)
        
    })
})

$('#btn2').bind('click', function(){
    $('.div').stop()
})


