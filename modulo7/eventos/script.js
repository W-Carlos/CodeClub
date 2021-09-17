const element = document.querySelector('button')

/*
// Pegando o evento com onclick
const myFunction = () => {
    alert('Fui pressionado')
}*/

// Podemos pegar o evento diretamente o JavaScript
element.onclick = () => {
    alert('Fui pressionado')
}

// Evento de tecla

const element2 = document.querySelector('input')

element2.onkeypress = () => {
    console.log('Clikei em uma tecla')
}