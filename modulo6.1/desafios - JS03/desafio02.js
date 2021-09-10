/*[ ] Escreva um programa onde, você chame uma função enviando um número (aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido. */

const table = (value) => {
    if(value > 10 || value < 1) {
        console.log('Aceitamos somente valores entre 1 e 10')
        return
    }

    for(i = 1; i <= 10; i++) {
        console.log(`${value} x ${i} = ${value * i}`)
        
    }
}

table(5)
