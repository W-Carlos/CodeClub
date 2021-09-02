// Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em dois objetos separados. Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}. João e João, imprime true. João e Maria, imprime false.

const object1 = {
    name: "José",
    age: 20,
    sex: "masculine",
    height: 1.70,
    address: "Travessa dos Guimarães",
}
const object2 = {
    nome: "Maria",
    age: 30,
    sex: "female",
    height: 1.60,
    address: "Rua 2 de Julho",
}

const result = object1.name === object2.name

console.log(result)