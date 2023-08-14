//Função recebe e concatena dois arrays


function concatenaArray (arr1, arr2){

    return arr1.concat(arr2)
}

const array1 = [1, 2, 3]
const array2 = [2, 4, 5]

const arrayConcatenado = concatenaArray(array1, array2)

console.log(`O resultado é ${arrayConcatenado}`)
console.log(`O resultado é ${arrayConcatenado.join(', ')}`)