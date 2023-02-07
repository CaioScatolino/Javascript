// https://jsonplaceholder.typicode.com/posts

async function readPosts() {

    let postArea = document.querySelector('.posts')

    postArea.innerHTML = 'Carregando . . . '

    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await response.json()

    if(json.length > 0) {

        postArea.innerHTML = ' '

        for (let i in json) {
            let postHtml = `<div><h1>${json[i].title}</h1>${json[i].body}<hr></div>`
            postArea.innerHTML += postHtml
        }

    }else {
        postArea.innerHTML ('Não há nada para exibir')
    }
}

async function addNewPost(title, body) {

    await fetch(
        'https://jsonplaceholder.typicode.com/posts', 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                body,
                userId: 2
            })
        }
    )

    $('#titleField').val('')
    $('#bodyField').val('')

    readPosts()

}

$('#insertButon').bind('click', function(e) {
    e.preventDefault()

    let title = $('#titleField').val()
    let body = $('#bodyField').val()

    if(title && body) {

        addNewPost(title, body)

    }else {
        alert ("Você não digitou um titulo ou texto")
    }

})

readPosts()