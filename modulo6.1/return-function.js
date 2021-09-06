/*

    Return function

    Funções sem return são chamadas de VOID = "vazio". Porque ela não está retornando nada.

*/

function sum(number1, number2) {
    const result = number1 + number2
    return result
}

const firtsNumber = 50
const seccondNumber = 10

console.log(`O primeiro número é ${firtsNumber}`)
console.log(`O segundo número é ${seccondNumber}`)
console.log(`A soma dos números é ${sum(firtsNumber, seccondNumber)}`)