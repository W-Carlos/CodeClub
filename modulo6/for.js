/*

ESTRUTURA DE REPETIÇÃO - FOR
i de index
*/

/*============= Exemplo 1 =============*/
for(let i = 1; i <= 10; i++) {
    console.log(i)
}

// Os outros comandos só serão execultados depois que a repetição do for terminar
console.log('Terminou')

/*============= Exemplo 2 =============*/
let students = ['Bruna', 'Ana', 'Pedro', 'Maria', 'João']

for(let i = 0; i < students.length; i++) {
    console.log(`${students[i]}, está presente na sala de aula!`)
}