const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const dolar = 5.2

const convertValues = () => {
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReais)

    currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
        { style: 'currency', currency: 'USD' }
    ).format(inputReais / dolar)

}

const changeCurrency = () => {
    const currencyName = document.getElementById('currency-name-text')
    const currencyImg =document.getElementById('currency-image')

    //currencyName.innerHTML = 'Euro'

    if(select.value === "US$ Dólar americano") {
        currencyName.innerHTML = 'Dólar Americano'
        currencyImg.src = 'assets/estados-unidos.svg'
    }

    if(select.value === "€ Euro") {
        currencyName.innerHTML = 'Euro'
        currencyImg.src = 'assets/euro.svg'
    }

    //console.log(select.value)
    
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)