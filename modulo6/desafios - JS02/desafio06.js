/*
[ ] Faça um programa onde os jurados vão dar a explicação para cada nota dada. São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.
*/

let note = 10

switch (note) {
    case 0:
        console.log('Pessimo')
    break;

    case 1:
        console.log('Ruim')
    break;

    case 2:
        console.log('Pessimo')
    break;

    case 3:
        console.log('Pessimo')
    break;

    case 4:
        console.log('Pessimo')
    break;

    case 5:
        console.log('Razoavel')
    break;

    case 6:
        console.log('Melhorando')
    break;

    case 7:
        console.log('Pessimo')
    break;

    case 8:
        console.log('Boa')
    break;

    case 9:
        console.log('Muito boa')
    break;

    case 10:
        console.log('Otima')
    break;

    default:
        console.log('Nota não encontrada')
        break;
}