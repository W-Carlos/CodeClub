/*[ ] Faça um programa onde, você chame uma função que calcule a taxa mensal de juros de um investimento. 

- Você deve enviar como argumentos da função - Valor inicial investido - Valor atual do investimento - Tempo em meses, que o valor está investido
- A função deve RETORNAR a taxa de juros, já formatada. Ex: 2,5%. Siga a formula desse vídeo para te auxiliar com o cálculo.

Cálculo taxa = juros(Valor atual do investimento - Valor inicial investido) / Valor inicial investido * tempo */

function investmentRate(initialValue, currentValue, investmentTime) {
    const rate = (currentValue - initialValue) / (initialValue * investmentTime) 

    console.log(`A taxa de mensal de juros é ${(rate * 100).toFixed(2)}%`)    
}

const initialValue = 3000
const currentValue = 3700
const investmentTime = 12

investmentRate(initialValue, currentValue, investmentTime)