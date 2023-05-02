const listaDestinos = new Array(
    'São Paulo',
    'Rio de Janeiro',
    'Belo Horizonte',
    'Vitória',
    'Curitiba'
)

const destinoDesejado = 'Belo Horizonte'
let indice = 0

//console.table(listaDestinos)
//console.log(listaDestinos[indice])
//console.log(listaDestinos.length)

let destinoEncontrado = false

while(indice < listaDestinos.length){
    if(listaDestinos[indice] == destinoDesejado){
        //console.log('Destino encontrado!')
        destinoEncontrado = true
        break
    }else{
        //console.log('Destino NÃO encontrado!')
        destinoEncontrado = false
    }
    indice ++
}
//console.log(destinoEncontrado)
if(destinoEncontrado == true){
    console.log(`O destino ${destinoDesejado} foi encontrado. Boa viagem!!`)
}else{
    console.log('O destino NÃO foi encontrado!')
}
