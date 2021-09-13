/* 

For each = percorre um array

*/

const students = [
    {name: "Carlos", age: 25},
    {name: "Maria", age: 45},
    {name: "João", age: 21},
    {name: "Bruno", age: 43},
    {name: "Carla", age: 13},
    {name: "Ana", age: 25},
    {name: "Julio", age: 26}
]

/*
students.forEach((student, index, array) => {
    console.log(array)
})*/

// Calculando a idade media dos alunos

/*
let allStudentsAge = 0

students.forEach((students, index) => {
    allStudentsAge += students.age
})

const avarageAge = allStudentsAge / students.length

console.log(`A idade média dos alunos é de ${avarageAge.toFixed(0)}`)*/

students.forEach((student, index) => {
    console.log(`O aluno chama-se ${student.name}, tem ${student.age} anos e está na posição ${index} do array.`)
})