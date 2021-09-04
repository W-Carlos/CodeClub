/*
[ ] Crie 5 objetos nesse formato
{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }
Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo ,a pessoa deve ser maior de idade e brasileira para ser aprovada.
*/
const object1 = {
    name: 'John',
    age: '15',
    sex: 'masculino',
    profession: 'Programador',
    nationality: 'Americano'
}

const object2 = {
    name: 'José',
    age: '28',
    sex: 'masculino',
    profession: 'Desenvolvedor Back-End',
    nationality: 'Brasileiro'
}

const object3 = {
    name: 'Mariah',
    age: '20',
    sex: 'feminino',
    profession: 'Engenheira de Software',
    nationality: 'Brasileira'
}

const object4 = {
    name: 'Ana',
    age: '18',
    sex: 'feminino',
    profession: 'Desenvolvedora Web',
    nationality: 'Brasileira'
}

const object5 = {
    name: 'João',
    age: '27',
    sex: 'masculino',
    profession: 'Desenvolvedor Front-End',
    nationality: 'Brasileiro'
}

if(object5.age >= 18 && (object5.nationality === "Brasileiro" || object5.nationality === "Brasileira")) {
    console.log(`Parabens ${object5.name} você passou no processo! Você tem ${object5.age} anos e é ${object5.nationality}.`)
} else {
    console.log('Você não passou no processo! Você não possui os requisitos.')
}