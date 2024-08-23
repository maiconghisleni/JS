function contagem() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    var inicio = inicio.value
    var fim = fim.value
    var passo = passo.value
    
    if (passo <= 0){
        alert('Passo inválido! Deve ser maior que zero.');
    } else {
        res.innerHTML = '';
        inicio = Number(inicio);
        fim = Number(fim);
        passo = Number(passo);
    
        if (inicio < fim) {
            // Contagem crescente
            while (inicio <= fim) {
                res.innerHTML += (` VAI: ${inicio} <br>`);
                inicio += passo;
            }
        } else {
            // Contagem decrescente
            while (inicio >= fim) {
                res.innerHTML += (` VAI: ${inicio} <br>`);
                inicio -= passo;
            }
        }
    }
    
}

