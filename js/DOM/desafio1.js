const formulario = document.querySelector('#form')

const tabela = document.querySelector('.tabela')
const inputNome = document.querySelector('#nome')
const inputPeso = document.querySelector('#peso')
const inputAltura = document.querySelector('#altura')

const btnEnviar = document.querySelector('#enviar')




btnEnviar.addEventListener('click', (evento) =>{
    evento.preventDefault()
    
 /*    const nome = formulario.nome.value;
    const peso = formulario.peso.value;
    const altura = formulario.altura.value; */

    const nome = inputNome.value;
    const peso = inputPeso.value;
    const altura = inputAltura.value; 
    const imc = (peso/ (altura * altura)).toFixed(1)
    
    const pacienteTr = document.createElement('tr')
    const nomeTd = document.createElement('td')
    const pesoTd = document.createElement('td')
    const alturaTd = document.createElement('td')
    const imcTd = document.createElement('td')

    nomeTd.textContent = nome
    pesoTd.textContent = peso
    alturaTd.textContent = altura
    imcTd.textContent = imc

    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(imcTd)

    tabela.appendChild(pacienteTr)
    console.log(nome, peso, altura, imc)

    formulario.reset()

})