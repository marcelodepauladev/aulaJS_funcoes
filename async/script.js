// let numero = 10 //numero
// let nome = "André" //string 
// let lista = [1, 4, 5, 8, 0] //array
// let pessoa = {
//     nome: "André Lima",
//     idade: 44,
//     endereco: {
//         cidade: "Jaú",
//         cep: "1720202"
//     }
// } //objeto

// console.log(pessoa.endereco.cidade)

document.addEventListener('DOMContentLoaded', () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            const postsContainer = document.getElementById('posts-container')
            posts.forEach(post =>{
                const postElement = document.createElement('div')
                postElement.classList.add('post')
                postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.body}</p>
                `
                postsContainer.appendChild(postElement)
            })
        })
        .catch(erro => {
            console.log('Erro ao buscar os posts: ', error);
        })
})