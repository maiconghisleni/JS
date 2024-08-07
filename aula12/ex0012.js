var now = new Date()
var hours = now.getHours()
var minutes = now.getMinutes()
console.log(`Agora são exatamente ${hours}:${minutes} horas.`)
if (hours < 12){
    console.log('Bom dia')
} else if (hours <= 18){
    console.log('Boa Tarde')
} else {
    console.log('Boa Noite')
}