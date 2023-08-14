//Função recebe 2 arrays e retorna na interseção

function intersecaoArrays (arr1, arr2){

    return arr1.filter((elemento) => arr2.includes(elemento))
}

const array1 = [1, 2, 3, 4]
const array2 = [3, 4, 5, 6]

const intersecao = intersecaoArrays(array1, array2)

console.log (intersecao)