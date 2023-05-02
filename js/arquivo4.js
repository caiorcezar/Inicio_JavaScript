//Coversão de tipos

const n1 = '2'
const n2 = parseInt(n1);
const letra = 'M'
const nomes = ['Caio', 'Marivaldo', 'Maristela']
const idades = [10, 20, 32]

console.log('ano ' + 2022);
//Verificando tipo da variável n1
console.log(typeof n1)
console.log(typeof n2)
console.log(n1 + n1);
console.log('10' + '2');
//Exemplo de Tipagem Fraca
console.log('10' / '2');

console.log(parseInt(n1) + parseInt(n1))
console.log(parseInt(letra) + parseInt(letra))

//Exemplo de Tipagem Fraca
console.log(n1 / n1)

//função da vírgula é separar valores
console.log(4,5)
console.log(4.5)

console.table(nomes)
console.log(nomes)
//console.table(idades)