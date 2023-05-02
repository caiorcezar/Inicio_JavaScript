//Condicionais com Operador Lógico E ( && )

const nota = 70;
const faltas = 15;
const totalAulas = 30;

//Para ser aprovado deve ter nota maior que 50 e qtd faltas menor ou igual a 25% do total de aulas

if(nota >= 50 && faltas <= 0.25 * totalAulas){
    console.log("APROVADO")
}else{
    console.log("REPROVADO")
}


//Estruturas condicionais aninhadas

/* if(nota >= 50){
    if(faltas <= 0.25 * totalAulas){
        console.log('Aprovado')
    }else{
        console.log('Reprovado FALTAS')
    }
}else{
    console.log('Reprovado NOTAS')
} */