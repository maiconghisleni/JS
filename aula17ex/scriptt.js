let valores = []
let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inLista(n, valores){
    if (valores.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
       alert(`Valor inválido ou já encontrado na lista.`)
    }
}

function finalizar (){
    let tot = valores.length
    res.innerHTML += `Ao todo, temos ${tot} números cadastrados<br>`
    let maiorNumero = Math.max(...valores)
    res.innerHTML += `O maior número informado foi ${maiorNumero}<br>`
    let menorNumero = Math.min(...valores)
    res.innerHTML += `O menor número informado foi ${menorNumero}<br>`
    let soma = 0
    let media = 0
    for(let pos in valores){
        soma += valores[pos]
    }
    res.innerHTML += `A soma dos números é ${soma}<br>`
    media = soma/tot
    res.innerHTML += `A media de todos os valores é ${tot}<br>`
}
