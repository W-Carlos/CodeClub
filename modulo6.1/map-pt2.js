/*

    MAP pt2

*/

/*
const numbers = [1, 2, 3, 4]

const double = number => number * 2
const sum = number => number + 10
const minus = number => number - 5

const newArray = numbers.map(double).map(sum).map(minus)

console.log(newArray)*/

const reals = [20, 30, 10, 5]

const double = number => number * 2
const toReal = number => `R$ ${number.toFixed(2)}`

const newReal = reals.map(double).map(toReal)

console.log(newReal)