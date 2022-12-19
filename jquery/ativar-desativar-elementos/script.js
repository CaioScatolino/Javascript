var attr = $('#salvar').attr('checked')

if(typeof attr !== 'undefined' && typeof attr!== false) {
    $('.input').attr('disabled', 'disabled')
}else {
    $('.input').removeAttr('disabled')
}