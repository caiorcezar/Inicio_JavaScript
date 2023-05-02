//Estruturas Condicionais

const cidades = new Array(
    'São Paulo',
    'Rio de Janeiro',
    'Belo Horizonte',
    'Curitiba'
)

const idade = 15;
const acompanhado = false;

/* if(idade >= 18){
    cidades.splice(2,1)
    console.log('Idade suficiente ' + cidades)
}else if(acompanhado){
    cidades.splice(2,1)
    console.log('Está acompanhado ' + cidades)
}else{
    console.log('Não tem idade suficiente nem está acompanhado')
} */

//Uso do operador lógico OU ( || )

if(idade >= 18 || acompanhado){
    cidades.splice(2,1)
    console.log(cidades)
}else{
    console.log('Não pode comprar')
}

