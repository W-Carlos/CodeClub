/*

OPERADORES TERNÁRIOS OU CONDICIONAL

? se
: se não

Exemplo: ? (se) algo for verdadeiro (vai executar algum comando) : (se não) se algo for falso (executar outro comando)

*/

const rain = true
const umbrela = rain ? 'levar guarda-chuva' : 'deixar guarda-chuva'

console.log(umbrela)

// TRANSFERIR DINHEIRO

const balance = true
const isNotBlocked = true
const accountExist = true

const transferOk = balance && isNotBlocked && accountExist ? 'TRANSFERENCIA REALIZADA' : 'TRANSFERENCIA NEGADA'

console.log(transferOk)