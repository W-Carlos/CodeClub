/* DESAFIO MAP */

const list = [
    {name: "Carlos", vip: true},
    {name: "Maria", vip: false},
    {name: "João", vip: true},
    {name: "Bruno", vip: true},
    {name: "Carla", vip: false},
    {name: "Ana", vip: true},
    {name: "Julio", vip: false}
]

const newList = list.map((listVit) => {
    const newList = {
        name: listVit.name,
        vip: listVit.vip,
        sector: listVit.vip ? 'Black' : 'Green'
    }

    return newList
})

console.log(newList)


/*
// Desafio 2
const students = [
    {name: "Carlos", testGrade: 7},
    {name: "Maria", testGrade: 5},
    {name: "João", testGrade: 8},
    {name: "Bruno", testGrade: 9},
    {name: "Carla", testGrade: 3},
    {name: "Ana", testGrade: 2},
    {name: "Julio", testGrade: 10}
]

const noteStudents = students.map((students) => {
    let note

    if(students.testGrade >= 7){
        note = 'approved'
    } else {
        note = 'desapproved'
    }

    const noteStudents = {
        name: students.name,
        finalResult: note
    }
    return noteStudents
})
console.log(noteStudents)*/