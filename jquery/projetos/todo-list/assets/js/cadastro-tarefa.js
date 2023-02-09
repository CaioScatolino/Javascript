$(function () {




    $('#form-cadastro-tarefa').submit(function (e) {

        let tarefa = $("#tarefa").val()
        let data = $("#data").val()

        if (!tarefa || !data) {

            $('#alert-cadastro-tarefa-erro').show()
            return false
        }

        salvaTarefa(tarefa, data)

        e.preventDefault()
    })

    $('.btn-close').bind('click', function () {


        $(this).parent().css("display", "none")

    })



    $('#data').mask('00/00/0000')
})

function salvaTarefa(tarefa, data) {

    const objetoTarefaParaSalvar = { id: new Date().getTime(), tarefa, data }

    let tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas-todo-list'))


    if (tarefasCadastradas && tarefasCadastradas.length) {

        tarefasCadastradas.push(objetoTarefaParaSalvar)

        localStorage.setItem('tarefas-todo-list',
            JSON.stringify(tarefasCadastradas)
        )
    } else {

        localStorage.setItem('tarefas-todo-list',
            JSON.stringify([objetoTarefaParaSalvar])
        )
    }


    $('#alert-cadastro-tarefa-sucesso').show()

    $('#tarefa').val('')
    $('#data').val('')

}


