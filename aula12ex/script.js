function carregar(){
    var msg = document.getElementById(`msg`)
    var img = document.getElementById(`imagem`)
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        img.src = 'midia/manha.jpg'
        document.body.style.background = 'bisque'
    } else if (hora >= 12 && hora <= 18){
        img.src = 'midia/tarde.jpg'
        document.body.style.background = '#b9546f'
    } else {
        img.src = 'midia/noite.jpeg'
        document.body.style.background = 'gray'
    }
}