// Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em um objeto. Ex: const object1 = {firstName:"João", seccondName:"Maria"}. João e João, imprime true. João e Maria, imprime false.

const object1 = {
    nameOne: "João",
    nameTwo: "João"
}

console.log(object1.nameOne == object1.nameTwo)