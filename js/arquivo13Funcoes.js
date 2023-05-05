//Verifica se é Par
const numero = 5

const resultado = verioficaPar(numero)

function verioficaPar  (numero){
    if(numero % 2 === 0){
        return 'PAR'
    }else{
        return 'IMPAR'
    }
}

/* console.log(`O Numero ${numero} é ${resultado}`) */


//Fatorial de um número

const numerofatorial = 5
const resultadoFatorial = fatorial(numerofatorial)


function fatorial (numero){
   if(numero === 0 || numero ===1){
    return 1
   }else{
    return numero * fatorial(numero -1)
   }    
}
console.log(`O fatorial de ${numerofatorial} é ${resultadoFatorial}`)