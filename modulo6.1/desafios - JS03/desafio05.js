/*[ ] Escreva um programa onde, você chame uma função mandando dois argumentos, 2 números, e a função responde qual número é maior*/

function numbers(number1, number2) {
    let result1 = Math.max(number1, number2)
    let result2 = Math.min(number1, number2)

    console.log(`O número maior é ${result1}`)
    console.log(`O número menor é ${result2}`)

     
}



numbers(6, 10)