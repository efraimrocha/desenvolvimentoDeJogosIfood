
function adicao(x,y){
    return x + y;
};

function subtracao(x,y){
    return x - y;
};

function multiplicacao(x,y){
    return x * y;
};

function divisao(x,y){
    return x / y;
};

function calcular(x, operacao, y){
    console.log(operacao(x,y));
};


calcular(10, adicao, 20);
calcular(10, subtracao, 20);
calcular(10, multiplicacao, 20);
calcular(10, divisao, 20);

/*
document.getElementById('btn').addEventListener('click',() => {
    console.log('clicou')
});
*/