//Estruturas Condicionais

const cidades = new Array(
    'São Paulo',
    'Rio de Janeiro',
    'Belo Horizonte',
    'Curitiba'
)

const idadeComprador = 15;


/* if(condição){
    ação se condição for aceita
}else{
    ação se condição não for aceita
}
 */

if(idadeComprador >= 18){
    cidades.splice(1,1)
    console.log(cidades)
}else{
    console.log('Idade insuficiente para compra')
}

//console.log(cidades)