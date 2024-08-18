function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gen = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'midia/criancam.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'midia/jovemm.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'midia/adultom.jpg')
            } else {
                img.setAttribute('src', 'midia/idosom.jpg')
            }
        } else if (fsex[1].checked) {
            gen = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'midia/criancaf.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'midia/jovemf.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'midia/adultof.jpg')
            } else {
                img.setAttribute('src', 'midia/idosof.jpg')
            }
        }
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
        res.appendChild(img)
    }
}