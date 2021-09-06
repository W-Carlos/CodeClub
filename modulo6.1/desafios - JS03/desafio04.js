/*[ ] Escreva um programa onde, você chame uma função, e ela diga que ano estamos!  */

function yearCurrent() {
    let yearActual = new Date()
    let day = yearActual.getDate().toString().padStart(2, '0')
    let month = (yearActual.getMonth() + 1).toString().padStart(2, '0')
    let year = yearActual.getFullYear()

    console.log(`Data: ${day}/${month}/${year}`)

    return
}

yearCurrent()