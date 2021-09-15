/*
    REDUCE
        - Retorna um valor (pode ser um novo array, um objeto, string, number e etc)
        - Aceita 4 parâmetros
            - acumulador
            - valor total
            - index
            - array completo
 */

const list = [1, 2, 3, 4]

const sum = list.reduce((acumulador, valorTotal) => {
   return acumulador + valorTotal
}, 0)

console.log(sum)