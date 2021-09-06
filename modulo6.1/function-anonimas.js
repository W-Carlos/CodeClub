/*

    Funções anônimas

*/

// Podemos armazenar uma função dentro de uma variavel
const sum = function(number1, number2) {
    const result = number1 + number2
    return result
}

const firtsNumber = 62
const seccondNumber = 12
const result = sum(firtsNumber, seccondNumber)

console.log(`O primeiro número é ${firtsNumber}`)
console.log(`O segundo número é ${seccondNumber}`)
console.log(`A soma dos números é ${result}`)
