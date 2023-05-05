const peso = 65
const altura = 1.75

const IMC = (peso/(altura*altura)).toFixed(1)

function calcaulaIMC(peso, altura){
    const IMC = (peso/(altura*altura)).toFixed(1)
    return IMC
}
console.log(IMC)

function classificaIMC(imc){
    if(imc < 18.6){
        console.log(`IMC ${imc} está Abaixo do peso`)
    }else if(imc < 25){
        console.log(`IMC ${imc} está no Peso Ideal`)
    }else if(imc < 30){
        console.log(`IMC ${imc} está Acima do peso`)
    }else if(imc < 35){
        console.log(`IMC ${imc} está com Obesiade grau I`)
    }else if(imc < 40){
        console.log(`IMC ${imc} está com Obesidade grau II`)
    }else{
        console.log(`IMC ${imc} está com Obesidade Mórbida!`)
    }
}
classificaIMC(calcaulaIMC(peso, altura))