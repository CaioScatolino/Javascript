$(function() {

    $('#form').bind('submit', function(e){
        e.preventDefault()

        var txt = $(this).serialize()
        console.log(txt)



        $.ajax({
            type: 'GET',
            url: 'ajax.php',
            data: txt, // é o que esta guardado com serialize
            success: function(resultado) {
                $('.div').html("Resultado: "+ resultado)
            },
            error: function(){
                alert('Deu erro aqui irmao')
            }
        })

        // $('#x').val("")
        // $('#y').val("")
    })



})

