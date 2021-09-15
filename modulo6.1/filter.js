/*

    FILTER
        - Cria um novo array, a partir do array percorrido (array original)
        - Cria um novo array APENAS com os elementos filtrados
        - Aceita 3 parâmetros
            - item do array
            - index
            - array completo

*/
/*
const list = [
    {name: "Carlos", vip: true},
    {name: "Maria", vip: false},
    {name: "João", vip: true},
    {name: "Bruno", vip: true},
    {name: "Carla", vip: false},
    {name: "Ana", vip: true},
    {name: "Julio", vip: false}
]

// Retorna só os clientes que forem true
const justVip = list.filter(client => {
    return client.vip
})

console.log(justVip)*/


const students = [
    {name: "Carlos", testGrade: 7},
    {name: "Maria", testGrade: 5},
    {name: "João", testGrade: 8},
    {name: "Bruno", testGrade: 9},
    {name: "Carla", testGrade: 3},
    {name: "Ana", testGrade: 2},
    {name: "Julio", testGrade: 10}
]

const newStudentList = students.filter(student => {
    return student.testGrade >= 7
})

console.log(newStudentList)