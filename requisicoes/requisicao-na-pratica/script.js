// https://jsonplaceholder.typicode.com/posts

function clicou() {

    //GET, POST, PUT, DELETE
    
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            console.log(`Status ${response.status}`)
            return response.json()
        }) 
        .then((json) => {

            alert(`O título do primeiro post é: ${json[0].title}`)
        })
        .catch((error) => {

            alert('Deu problema irmão')
            console.log(error)

        })
        .finally(() => {
            alert("Ufa, acabou tudo!")
        })

}

function inserir() {

    fetch(
        'https://jsonplaceholder.typicode.com/posts', 
        {
          method: 'POST',
          headers: {
            'Content-Type' : 'application/json',
          },
          body: JSON.stringify({
            title: 'Título de teste',
            body: 'Corpo de teste',
            userId: 2
          })   
        }
    )
    .then((response) => {
        return response.json()
    })
    .then((json) => {
        console.log(json)
    })
}

$('#botao').bind('click', clicou)
$('#inserir').bind('click', inserir)