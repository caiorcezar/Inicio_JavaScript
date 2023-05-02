const numero = 1
const texto = '1'

/* console.log(numero == texto)
console.log(typeof(numero), typeof(texto))
console.log(numero === texto) */

//Declarando a função
function escreveTexto(texto){
    console.log(texto)
}

//Chamando a função
escreveTexto("Olá, tudo bem?")
escreveTexto(typeof(numero))

function soma(n1, n2){
    return n1 + n2
}
escreveTexto(soma(5, 3))

function dividir (dividendo, divisor){
    return(dividendo / divisor)
}
escreveTexto(dividir(6,2))
escreveTexto(dividir(2,6).toFixed(2))
escreveTexto(dividir(soma(4,2), soma(-2, 4)))