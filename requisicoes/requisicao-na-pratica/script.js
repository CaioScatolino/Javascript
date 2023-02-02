// https://jsonplaceholder.typicode.com/posts

function clicou() {
    
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
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

$('#botao').bind('click', clicou)