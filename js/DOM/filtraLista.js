const linhasFiltra = document.querySelectorAll('.linhaUl-2')
const inputFiltro = document.querySelector('#filtrar')
const lista = document.querySelector('.listaFiltro')



function filtrar(evento){
    const textoFiltro = inputFiltro.value.toUpperCase()

    let contador = 0
    while(contador < linhasFiltra.length){

        const linha = linhasFiltra[contador]
        const textoLinha = linha.textContent

        if(textoLinha.toUpperCase().includes(textoFiltro)){
            linha.style.display = ""
        }else{
            linha.style.display = 'none'
        }

       /*  linha.style.display =  textoLinha.toUpperCase().includes(textoFiltro) ? "" : 'none'; */

        contador++
    }
}

inputFiltro.addEventListener('keyup', filtrar)
