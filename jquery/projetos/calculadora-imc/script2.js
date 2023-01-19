$(function() {

    $('button').bind('click', function() {

        let altura = $('#altura').val()
        let peso = $('#peso').val()

        altura = altura.replace(',' , '.')
        peso = peso.replace(',' , '.')


        let imc = peso / (altura * altura)

        

        if(imc < 16) {

            var traducao = 'Baixo peso, muito grave'
        }else if(imc >= 16 && imc < 16.99) {
            var traducao = 'Baixo peso, grave'
        }else if (imc >=17 && imc < 18.49){
            var traducao = 'Baixo peso'
        }else if (imc >= 18.5 && imc <24.99) {
            var traducao = 'Peso normal'
        }else if (imc>= 25 && imc < 29.99) {
            var traducao = 'Sobrepeso'
        }

        imc = imc.toFixed(2)

        $('#resultado').html("Seu IMC é de: "+ imc + " kg/m² " + traducao)
    })

    })




