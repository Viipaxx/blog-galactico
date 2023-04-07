class NewNews extends HTMLElement {

    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"})
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())
    }

    build(){

        // Criando elemento root
        const componentRoot = document.createElement("div")
    
        // Setando o atributo 'class' e o nome 'card'
        componentRoot.setAttribute("class", "card")

        // Criando elemento para ser a div left
        const cardLeft = document.createElement("div")

        // Setando o atributo 'class' e o nome 'card__left' 
        cardLeft.setAttribute("class", "card__left")
        
        //? Criando os elementos da div left
        const autor = document.createElement("span")
        const newTitle = document.createElement("a")
        const newContent = document.createElement("p")

        //? criando prop dos elementos da div left
        autor.textContent = 'By @' + (this.getAttribute("autor") || "Anonymous")
        newTitle.textContent = this.getAttribute("title")
        newTitle.href = this.getAttribute("link-url") || "#"
        newContent.textContent = this.getAttribute("content")

        // criando a ligação dos elementos com o elemento pai (div left)
        cardLeft.appendChild(autor)
        cardLeft.appendChild(newTitle)
        cardLeft.appendChild(newContent)

        // Criando elemento para ser a div right
        const cardRight = document.createElement("div")
        
        // Setando o atributo 'class' e o nome 'card__right' 
        cardRight.setAttribute("class", "card__right")

        //? Criando os elementos da div right
        const newsImage = document.createElement("img")

        //? Criando prop do elemento da div right
        newsImage.src = this.getAttribute("photo") || "./img/default-avatar.jpg"
        newsImage.alt = "Foto da Noticia"

        // Criando ligação do elemento com o elemento pai (div right)
        cardRight.appendChild(newsImage)
        
        // Criando ligação dos elementos (div right e left) com o elemento pai (div card)
        componentRoot.appendChild(cardLeft)
        componentRoot.appendChild(cardRight)

        // Retornando componente root
        return componentRoot
    }

    styles(){

        const style = document.createElement("style")

        style.textContent = `
            .card {
                width: 80%;
                margin: 40px auto 0;
                border: 1px solid gray;
                box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
                -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
                -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                border-radius: 40px;
            }
            
            .card__left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
            }
            
            .card__left>a {
                margin-top: 15px;
                font-size: 25px;
                color: black;
                text-decoration: none;
                font-weight: bold;
            }
            
            .card__left>p {
                color: rgb(62, 62, 62);
            }
            
            .card__left>span {
                font-weight: 400;
            }

            .card__right img {
                max-width: 100%;
                border-radius: 40px;
            }
        `

        return style;
    }
}

customElements.define("nova-noticia", NewNews)