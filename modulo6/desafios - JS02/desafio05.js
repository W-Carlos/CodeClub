/*
[ ] Crie 5 objetos nesse formato
{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }
Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo ,a pessoa deve ser maior de idade e brasileira para ser aprovada.
*/

const object1 = {
    name: 'João',
    age: '30',
    sex: 'masculino',
    profession: 'Desenvolvedor Front-End',
    nationality: 'Brasileiro'
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
    name: 'John',
    age: '15',
    sex: 'masculino',
    profession: 'Programador',
    nationality: 'Americano'
}

if(object1.age >= 18 && (object1.nationality === "Brasileiro" || object1.nationality === "Brasileira")) {
    console.log('Parabens você passou no processo!')
} else {
    console.log('Você não passou no processo')
}