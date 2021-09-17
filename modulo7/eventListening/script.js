const input = document.querySelector('input')
const select = document.querySelector('select')
const button = document.querySelector('button')

input.addEventListener('focus', () => {
    console.log('Dei focu no input')
})

select.addEventListener('change', () => {
    console.log(select.value)
})

// Podemos fazer de outra forma

const clickButton = () => {
    alert('Clikei no botão')
}

button.addEventListener('click', clickButton)