/* Arrays - Metodos */

const students = ['João', 'Maria', 'Pedro', 'Carla', 'Bia', 'Mauricio']

// push = Vai adicionar um item no final do array.
students.push('Carlos')

// length = Mostra o tamanho do array
console.log(students.length)

// sort = Coloca os elementos em ordem alfabetica
console.log(students.sort())

// delete = Deleta um item do array
delete students[0]

// splice (unir / ligar) = Permite que tire ou coloque itens no array exatamente na posição que queremos
students.splice(0, 1) // Retira um ou mais itens
students.splice(1, 0, 'Carlos') // Adiciona item na posição 1

// slice (fatiar) = Permite que tire itens do array
const newStudents = students.slice(1, 3)

// pop = Esse metodo retira o ultimo item do array
students.pop()

// shift = Retira o primeiro item do array
students.shift()

console.log(students)