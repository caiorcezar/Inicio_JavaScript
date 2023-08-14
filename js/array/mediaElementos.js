//Função retorna média de array numérico

function mediaArray (arr){

    const soma = arr.reduce((acumulador, valor) => acumulador + valor, 0)

    return soma / arr.length
}

const array = [1, 2, 3, 4, 5, 6, 7]


const media = mediaArray(array)

console.log(media)