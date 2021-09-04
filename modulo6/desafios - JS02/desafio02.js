/*
[ ] Faça um programa que verifica se uma pessoa é brasileira ou não. // DEVE SER UM OBJETO
*/

const person = {
    name: 'José',
    age: 30,
    nationality: 'Brasileiro'
}

if(person.nationality === 'Brasileiro'){
    console.log(`${person.name} é Brasileiro!`)
} else if (person.nationality !== 'Brasileiro'){
    console.log('Você é estrangeiro!')
}