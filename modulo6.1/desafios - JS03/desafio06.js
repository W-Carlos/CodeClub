/*[ ] A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos. A prefeitura deseja saber: 
    - média do salário da população; 
    - média do número de filhos; 
    - maior salário; 
    - O final da leitura de dados se dará com a entrada de um salário negativo. 
    - Faça isso usando uma função!*/

let peaple = [
    {
        salary: 1500,
        children: 3
    }, 

    {
        salary: 2000,
        children: 4
    },

    {
        salary: 1200,
        children: 2
    },

    {
        salary: 3000,
        children: 1
    }, 

    {
        salary: -2000,
        children: 3
    }
]

function mediaPeaple(populationNumber) {
    
    let mediaSalary = 0
    let mediaChildren = 0
    let highestSalary = 0

    for(let i = 0; i < populationNumber.length; i++) {
        const salary = populationNumber[i].salary
        const children = populationNumber[i].children

        if(salary > highestSalary) {
            highestSalary = salary
        }

        if(salary < 0){
            console.log(`Média de salário R$ ${(mediaSalary / i).toFixed(0)}`)
            console.log(`Média de filhos ${(mediaChildren / i).toFixed(0)}`)
            console.log(`Maior sálario R$ ${highestSalary}`)
            break
        }else{
            mediaSalary = mediaSalary + salary
            mediaChildren += children
        }
    }
    

    //console.log(population)
    return
}

mediaPeaple(peaple)