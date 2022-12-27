$('#div').bind('scroll', function(){
    console.log('Scrollou!!')
    $(this).addClass('bg')
})

$(window).bind('resize', function(){
    console.log('Mudou o tamanho da tela')
})