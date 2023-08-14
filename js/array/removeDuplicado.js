//Remover Elementos duplicados

function removerDuplicados (array) {

    return Array.from(new Set(array))
}

const arrayOriginal = [1, 2, 2, 3, 3, 4, 5, 5, 5, 6, 6, 7]

const novoArray = removerDuplicados(arrayOriginal)

console.log(novoArray)