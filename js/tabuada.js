
const botao = document.getElementById('btn')


function montaTabuada(event){
    event.preventDefault()
    const lista = document.getElementById('lista')
    const multiplo = parseInt(document.getElementById('nome').value) 
    
    let i = 1
    while(i <11){
        const linha = document.createElement('li')
        linha.innerHTML = multiplo * i
    
        lista.appendChild(linha)
    
        console.log(lista, multiplo)
    
        i++
    }

}
botao.addEventListener('click', montaTabuada)