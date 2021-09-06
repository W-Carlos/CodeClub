/*[ ] Escreva um programa onde, você chame uma função enviando um número (aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido. */

const tabuada = () => {
    let valor = 7
    for(i = 0; i <= 10; i++) {
        console.log(`${valor} x ${i} = ${valor * i}`)
    }
}

tabuada()
