var valor = $.trim($('#algo').html())

// $('li').each(function() {
//     alert($(this).html())
// })

var idade = 90

if($.isNumeric(idade)) {
    console.log(`${idade} é númerica`)
}else {
    console.log(`${idade} não é númerica`)
}