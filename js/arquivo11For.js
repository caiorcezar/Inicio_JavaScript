const listaDestinos = new Array(
    'São Paulo',
    'Rio de Janeiro',
    'Belo Horizonte',
    'Vitória',
    'Curitiba'
)

const destinoDesejado = 'Rio de Janeiro';
const idade = 18;
let destinoEncontrado = false

for(let i = 0; i < 5; i++){
    if(listaDestinos[i] == destinoDesejado){
        destinoEncontrado = true
        break
    }else{
        destinoEncontrado = false
    }
    
}

if(destinoEncontrado && idade >= 18){
    console.log('Boa Viagem!')
}else{
    console.log('Não pode viajar')
}