const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const dolar = 5.2
const euro = 5.9
const bitcoin = 0.0000039

const convertValues = () => {
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReais)

    if(select.value === "US$ Dólar americano") {
        currencyValueText.innerHTML = new Intl. NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputReais / dolar)

    }

    if(select.value === "€ Euro"){
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputReais / euro)
    }
    
}

const changeCurrency = () => {
    const currencyName = document.getElementById('currency-name-text')
    const currencyImg =document.getElementById('currency-image')

    if(select.value === "US$ Dólar americano") {
        currencyName.innerHTML = 'Dólar Americano'
        currencyImg.src = 'assets/estados-unidos.svg'
    }

    if(select.value === "€ Euro") {
        currencyName.innerHTML = 'Euro'
        currencyImg.src = 'assets/euro.svg'
    }

    convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)