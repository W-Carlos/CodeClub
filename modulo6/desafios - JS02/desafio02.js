/*
[ ] Faça um programa que verifica se uma pessoa é brasileira ou não. // DEVE SER UM OBJETO
*/

const peaple = {
    name: 'José',
    age: 30,
    nationality: 'Brasileiro'
}

if(peaple.nationality === 'Brasileiro'){
    console.log('Você é Brasileiro!')
} else if (peaple.nationality !== 'Brasileiro'){
    console.log('Você é estrangeiro!')
}