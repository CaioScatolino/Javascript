$('button').click(function(){

    
    // Fazendo com IF

    // if($(this).hasClass('bg')) {
    //     $(this).removeClass('bg')
    // }else {
    //     $(this).addClass('bg')
    // }

    // Fazendo com toggle
    $(this).toggleClass('bg')
})

$('button').mouseover(function(){
    $('body').addClass('bg')
})

$('button').mouseout(function(){
    $('body').removeClass('bg')
})