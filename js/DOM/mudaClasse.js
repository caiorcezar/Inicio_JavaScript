

function mudaClasse (){
    const retangulo = document.querySelector('.retangulo');

    retangulo.classList.toggle('ativo');
}

const botao= document.querySelector('.btn');

botao.addEventListener('click', mudaClasse)