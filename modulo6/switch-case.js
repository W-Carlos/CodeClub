/*

CONTROLE DE FLUXO - CONDICIONAIS - SWITCH CASE
Obs: Só funciona com valores fixos.

*/

const temperature = 35

switch (temperature) {
    case 30:
        console.log('Temperatura muito baixa')    
    break;

    case 33:
        console.log('Temperatura baixa')
    break;

    case 36:
        console.log('Temperatura normal')
    break;

    default:
        console.log('temperatura não encontrada')
    break;
}