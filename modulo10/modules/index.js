// Importando objeto person
const person = require('./sum')

    //console.log(person)

// Importando função sun
const sum = require('./sum')

    //console.log(sum (2, 3))

// Importando função multi
const multi = require('./multi')

    //console.log(multi(2, 5))

// Importando mais de um arquivo
/*const objectAndFunction = require('./objectsAndFunctions')

console.log(objectAndFunction.minus(4, 1))
console.log(objectAndFunction.division(4, 2))
console.log(objectAndFunction.peaple)*/

// Outra forma de fazer
const {minus, division, peaple} = require('./objectsAndFunctions')

console.log(minus(4, 1))
console.log(division(4, 2))
console.log(peaple)