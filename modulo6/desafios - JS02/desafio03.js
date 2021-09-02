/*
[ ] Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'. Então ele também irá gerar um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não. Em caso de ter ganhado, mostra o prêmio, se não ganhou, mostra outra mensagem.
*/

let numberWinner = Math.floor(Math.random() * 10 + 1) 
let myNumber = Math.floor(Math.random() * 10 + 1)

if (numberWinner === myNumber){
    console.log(`Parabéns você acertou! O número ganhador é ${numberWinner}`)
} else {
    console.log(`Você errou! O número correto é ${numberWinner}`)
}
