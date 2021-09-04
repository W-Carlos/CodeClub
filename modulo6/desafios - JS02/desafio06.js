/*
[ ] Faça um programa onde os jurados vão dar a explicação para cada nota dada. São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.
*/

let note = 10

switch (note) {
    case 0:
        console.log('Você não obteve pontuação')
    break;

    case 1:
        console.log(`Sua nota é ${note}. Seu desempenho foi pessimo!`)
    break;

    case 2:
        console.log(`Sua nota é ${note}. Seu desempenho foi ruim!`)
    break;

    case 3:
        console.log(`Sua nota é ${note}. Seu desempenho não foi como esperado!`)
    break;

    case 4:
        console.log(`Sua nota é ${note}. Você precisa melhorar seu desempenho!`)
    break;

    case 5:
        console.log(`Sua nota é ${note}. Seu desempenho foi Equilibrado!`)
    break;

    case 6:
        console.log(`Sua nota é ${note}. Seu desempenho foi Razoavel!`)
    break;

    case 7:
        console.log(`Sua nota é ${note}. Seu desempenho foi Bom!`)
    break;

    case 8:
        console.log(`Sua nota é ${note}. Seu desempenho foi Muito Bom!`)
    break;

    case 9:
        console.log(`Sua nota é ${note}. Seu desempenho foi Otimo!`)
    break;

    case 10:
        console.log(`Sua nota é ${note}. Parabéns você tirou a nota maxima`)
    break;

    default:
        console.log('Nota não encontrada')
        break;
}