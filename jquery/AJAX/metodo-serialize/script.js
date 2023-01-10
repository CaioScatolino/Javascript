$(function() {

    $('#form').bind('submit', function(e){
        e.preventDefault()

        var txt = $(this).serialize()
        console.log(txt)

        $('#user').val("")
        $('#password').val("")
    })



})

