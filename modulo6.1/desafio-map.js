/* DESAFIO MAP */

const list = [
    {name: "Carlos", vip: true},
    {name: "Maria", vip: false},
    {name: "João", vip: true},
    {name: "Bruno", vip: true},
    {name: "Carla", vip: false},
    {name: "Ana", vip: true},
    {name: "Julio", vip: false}
]

const newList = list.map((listVip) => {
    const newList = {
        name: listVip.name,
        vip: listVip.vip,
        sector: listVip.vip ? 'Black' : 'Green' 
    }
    
    return newList
})

console.log(newList)