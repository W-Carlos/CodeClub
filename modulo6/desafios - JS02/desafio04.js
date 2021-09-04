/*
[ ] Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor.
*/

let numberOne = 5
let numberTwo = 9
let numberThree = 2

if(numberOne > numberTwo && numberOne > numberThree) {
    console.log('O primeiro número é maior!')
} else if(numberTwo > numberThree) {
    console.log('O segundo número é maior!')
} else {
    console.log('O terceiro número é maior!')
}

if(numberOne < numberTwo && numberOne < numberThree) {
    console.log('O primeiro número é menor!')
} else if(numberTwo < numberThree) {
    console.log('O segundo número é menor!')
} else {
    console.log('O terceiro número é menor!')
}


/*let bigger = Math.max(numberOne, numberTwo, numberThree)
let smaller = Math.min(numberOne, numberTwo, numberThree)

console.log(`O maior número é ${bigger}, e o menor número é ${smaller}.`)*/
