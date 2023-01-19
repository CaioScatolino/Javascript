$(function() {

    $('li').hover(function() {
        $(this).find('.subMenu').slideDown(100)

    }, function() {
        $(this).find('.subMenu').slideUp(100)
    })

    })




