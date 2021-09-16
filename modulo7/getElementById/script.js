// Pegando o elemento pelo id
const element = document.getElementById('main-text')

// Pegando o elemento pela classe
const element2 = document.getElementsByClassName('paragraph')

// Pegando o elemento pela tag
const element3 = document.getElementsByTagName('p')

// Podemos pegar elementos pela tag, id ou class. Retorna o primeiro elemento que ele encontrar.
const element4 = document.querySelector('p')

// Trás todos os elementos que encontrar (NodeList)
const element5 = document.querySelectorAll('p')

element5.forEach( element => {
    //console.log(element)
})

// Trás os elementos com o nome selecionado (Node List)
const element6 = document.getElementsByName('my-input')

console.log(element6)