$(function() {

    $('#form').bind('submit', function(e){
        e.preventDefault()

        var txt = $(this).serialize()
        console.log(txt)



        $.ajax({
            type: 'POST',
            url: 'ajax.php',
            data: txt,
            dataType: 'json',
            success:function(json) {
                alert("Meu nome é: ")
            }
        })

        })


    })




