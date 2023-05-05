

function mudaClasse (){
    const retangulo = document.getElementsByClassName('retangulo');

    retangulo.classList.toggle('ativo');
}

const botao= document.getElementsByClassName('btn');

botao.addEventListener('click', () =>{
    mudaClasse()
})