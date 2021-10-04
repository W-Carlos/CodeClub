/*

    THIS

    Em inglês this significa: este, esta ou isto.

    No JavaScript this faz referência a :

        Node => module.exports
        Web => window

    Pra entendermos melhor o this precisamos entender sobre escopo.

    Escopo global => Quando começamos a escrever na raiz da nossa aplicação. No contexto global o this faz referência ao objeto global, que é o objeto windowno navegador de internet ou ao objeto global no Node.js

    Escopo local => Quando por exemplo criamos uma variável dentro de uma função.

*/

// Escopo Gloal
const name = "Carlos" 

// Escopo Local
function myName() { 
    const name = "Carlos"
}

/*
// Temos um objeto chamado global que possui muitas ferramentas dentro dele. O objeto global só existe no ecosistema node, dentro do navegador esse objeto se chama window
global.console.log('Olá')*/

// Importando com o this no escopo global
const {peaple1} = require('./index')

console.log(peaple1)

// Importando com o this no escopo local
const person1 = {
    name: "Carlos",
    age: 25,
    // Nesse caso o this vai fazer referência aos elementos acima dele
    talk: function(){
        console.log(this.age)
    }
}

//person1.talk()

function myFunction(){
    // Nesse caso this === global
    console.log(this)
}

myFunction()