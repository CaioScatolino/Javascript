$(function () {


    $('#senha').bind('keyup' , function() {

        var txt = $(this).val()
        var forca = 0

        // letras

        var reg = new RegExp(/[a-z]/i)
        if(reg.test(txt)) {
            forca += 25
        }

        // numeros

        var reg = new RegExp(/[0-9]/i)
        if(reg.test(txt)) {
            forca += 25
        }

        // caracteres especiais

        var reg = new RegExp(/[^a-z0-9]/i) // usando o ^ exclui
        if(reg.test(txt)) {
            forca += 25
        }

        // minimo de caracteres

        if(txt.length > 6) {
            forca += 25
        }

        if( forca >= 75) {
            var aceita = 'Senha permitida'
        }else {
            var aceita = 'Senha não aceita'
        }

        switch (forca) {

            case 0:
                $('.forca').text('Força: Isso nem senha é - ' + aceita)
                break
            case 25:
                $('.forca').text('Força: Senha muito fraca - ' + aceita)
                break
            case 50:
                $('.forca').text('Força: Senha fraca - ' + aceita)
                break
            case 75:
                $('.forca').text('Força: Senha boa - ' + aceita).css('color', 'green')
                break
            case 100:
                $('.forca').text('Força: Senha muito boa - ' + aceita).css('color', 'green')
                break
                
        }

        // $('.forca').html('Força: ' + forca + '%' )
        

    })

})