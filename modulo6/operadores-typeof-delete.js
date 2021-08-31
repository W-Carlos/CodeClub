/*

Operadores typeof e delete

type of = vai mostrar o tipo do valor
delete = vai deletar algum parâmetro

*/

// typeof
const myNumber = 20
const myString = "Olá, eu sou uma string"
const myObject = {
    name: "Object"
}

console.log(typeof myObject)

// delete
const peaple = {
    name: 'josé',
    age: 30,
    height: 1.7
}

delete peaple.height

console.log(peaple)