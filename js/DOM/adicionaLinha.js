const listaOrdenada = document.querySelector('.lista')
const botaoLinha = document.querySelector('.btn-2')
const inputLinha = document.querySelector('#texto')

console.log(listaOrdenada, botaoLinha, inputLinha)

function adiconaLinha(){
    const novaLinha = document.createElement('li')
    const texto = inputLinha.value
    novaLinha.innerHTML = texto

    listaOrdenada.appendChild(novaLinha)
}

botaoLinha.addEventListener('click', adiconaLinha)