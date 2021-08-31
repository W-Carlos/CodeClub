/*

CONTROLE DE FLUXO - CONDICIONAIS - IF ELSE

if = SE
else =SE NÃO
else if = MAS SE...

*/

const temperature = 42

if(temperature >= 35 && temperature <= 37) {
    console.log('Sua temperatura está normal')
} else if(temperature < 35) {
    console.log('Você está com Hipotermia')
}else if(temperature >= 37.8 && temperature <= 39.5){
    console.log('Você está com febre')
}else if(temperature >= 39.6 && temperature <= 41){
    console.log('Você está com Febre Alta')
}else{
    console.log('Você está com Hipertemia')
}