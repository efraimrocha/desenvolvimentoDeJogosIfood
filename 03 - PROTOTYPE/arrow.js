
// Diferença entre uma function e uma arrow function
// A principal diferença é que arrow function não tem contexto com o objeto, além de sua sintaxe simples e bem clara.

function funcao1 (){
    console.log(this);
};

const funcao2 = () => {
    console.log(this);
}


const efraim = {
    nome: 'Efraim',
    funcao1,
    funcao2
}

efraim.funcao1()
efraim.funcao2()

