/*
    Desafio Map, Reduce, Filter
        - Adicionar 10% de valor de mercado em cada companhia.
        - Pegar somente as empresas que foram fundadas antes do anos 2000.
        - Somar o valor de mercado das companhias.
*/

const companies = [
    {name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938},
    {name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975},
    {name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich ', foundedOn: 1968},
    {name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004},
    {name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006},
    {name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976}
]

const percentageMarketValue = company => {
    company.marketValue += company.marketValue / 10

    return company
}

const oldCompany = company => {
    return company.foundedOn < 2000
}

const sumMarketValue = (acc, cur) => {
    return acc + cur.marketValue
}

const totalCompany = companies
    .map(percentageMarketValue)
    .filter(oldCompany)
    .reduce(sumMarketValue, 0)

console.log(totalCompany)



