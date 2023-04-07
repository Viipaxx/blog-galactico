const publicar = document.getElementById('publicar')
const container = document.querySelector('.container')


publicar.addEventListener('click', () => {


    const autor = document.getElementById('autor')
    const titulo = document.getElementById('titulo')
    const link = document.getElementById('link')
    const descricao = document.getElementById('descricao')
    const img = document.getElementById('img')

    function newPost() {
        const newNews = `
        <nova-noticia
                autor="${autor.value}"
                title="${titulo.value}"
                link-url="${link.value}"
                content="${descricao.value}"
                photo="${img.value}"
                ></nova-noticia>
                `

        return newNews
    }

    function limparForm(){
        autor.value = ''
        titulo.value = ''
        link.value = ''
        descricao.value = ''
        img.value = ''
    }

    setTimeout(() => {
        container.innerHTML += newPost()
        limparForm()
        
    }, 1000)

})