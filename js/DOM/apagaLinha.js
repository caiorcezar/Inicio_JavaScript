const linhas = document.querySelectorAll('.linaUl')


function apagaLinha(evento){
    const linhaApagar = evento.target

    linhaApagar.remove()
}

let contador = 0
while(contador < linhas.length){
    linhas[contador].addEventListener('click', apagaLinha)
    contador ++
}