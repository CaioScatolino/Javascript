$(function() {

    $('.text').text('Este é <b>negrito</b> escrito com .text')
    $('.text2').html('Este é <b>negrito</b> escrito com .html').css('font-size', '18px')


    $('.input').val('Teste')
    $('.input').after('<br><div>Texto qualquer</div>')
    $('.input').before('<div>Nome:</div>')

    let p1 = $('.input').val()

    for (let i of p1) {
        $('.lista1').append(`<li>${i}</li>`)
    }


    
})