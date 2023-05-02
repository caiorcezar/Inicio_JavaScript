//Trabalhando com Arrays

const cidades = new Array(
    'São Paulo',
    'Rio de Janeiro',
    'Belo Horizonte',
    'Curitiba'
)

cidades.push('Salvador')
cidades.splice(1,2)

console.log(typeof cidades);
console.table(cidades);
console.log(cidades[2])