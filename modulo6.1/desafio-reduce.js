/*
    Desafio Reduce
        - Descobrir qual é o valor de mercado de todas as companhias
*/

const companies = [
    {name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938},
    {name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975},
    {name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich ', foundedOn: 1968},
    {name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004},
    {name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006},
    {name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976}
]

const TotalMarketValue = companies.reduce((acc, cur) => {
    return acc + cur.marketValue
}, 0)

console.log(`O valor de mercado de todas as companhias é: ${TotalMarketValue}`)