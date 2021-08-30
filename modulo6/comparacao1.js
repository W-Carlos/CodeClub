/*

OPERADORES DE COMPARAÇÃO 

== Igualdade. Ele compara o valor, mas não compara o tipo do valor
=== Igualdade Estrita. Ele compara o valor e o tipo do valor. Sempre usar esse.

!= Diferente. Verifica se o valor é diferente, mas não verifica o tipo do valor.
!== Totalmente Diferente. Verifica se o valor é diferente e tambem verifica o tipo do valor. Sempre usar esse.

> Maior
>= Maior ou Igual
< Menor 
<= Menor ou Igual

*/

// == Igualdade e === Igualdade Estrita
const Number1 = "20"
const Number2 = 20

console.log(Number1 == Number2)
console.log(Number1 === Number2)

// != Diferente e !== Totalmente Diferente
const Number3 = "30"
const Number4 = 30

console.log(Number3 != Number4)
console.log(Number3 !== Number4)