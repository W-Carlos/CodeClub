/*[ ] Escreva um programa onde, você chame uma função, e ela diga a hora exata!*/

const hoursCurrent = () => {
    let hourExact = new Date()
    let hour = hourExact.getHours()
    let minutes = hourExact.getMinutes()
    let seconds = hourExact.getSeconds()
    console.log(`Horas ${hour}:${minutes}:${seconds}`)

    return
}

hoursCurrent()