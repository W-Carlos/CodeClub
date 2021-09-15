/* Desafio 1 
    - Filtra apenas números pares e divisiveis por 5 
*/
/*
const list = [20, 3, 234, 12, 17, 541, 6, 87, 274, 1000]

const newList = list.filter((numbers) => { 

    if(numbers % 2 === 0 && numbers % 5 === 0) 

    return numbers 

})

console.log(newList)*/

/* Desafio 2
    - Filtrar empresas que foram fundadas depois de 1975
    - Tenham mais de 2 milhões de doláres de valor de mercado
*/

const companies = [
    {name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938},
    {name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975},
    {name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich ', foundedOn: 1968},
    {name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004},
    {name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006},
    {name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976}
]

const newCompanies = companies.filter((companies) => {
    if(companies.foundedOn <= 1975) return false
    if(companies.marketValue <= 200) return false
    
    return true
})
console.log(newCompanies)
