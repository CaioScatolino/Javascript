// https://jsonplaceholder.typicode.com/posts
async function clicou() {

    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts')
        let json = await response.json()
        alert(`O título do primeiro post é: ${json[0].title}`)
        alert("CLICOU")
    } catch (error) {
        console.log("Um erro aconteceu", error)
    } finally {
        alert('Acabou')
    }
}







async function inserir() {
    try {

        let response = await fetch(
            'https://jsonplaceholder.typicode.com/posts',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: 'Título de teste',
                    body: 'Corpo de teste',
                    userId: 2
                })
            }
        )

        let json = await response.json()
        console.log(json)
    } catch (error) {
        console.log("Um erro aconteceu", error)

    }
}

$('#botao').bind('click', clicou)
$('#inserir').bind('click', inserir)