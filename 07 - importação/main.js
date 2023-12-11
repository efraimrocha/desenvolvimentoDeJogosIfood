

const {get, print} = require('./funcoes-auxiliares');
//const numerosSorteados = [];

let maiorValorEncontrado = 0;

for (let i = 0; i < 5; i++) {
    const numeroSorteado = get();
    if (numeroSorteado > maiorValorEncontrado){
        maiorValorEncontrado = numeroSorteado;
    };  
};

print(maiorValorEncontrado);



/**
for(let i = 0; i < 5; i++){
    const numeroSorteado = get();
    numerosSorteados.push(numeroSorteado);
}

for(let i = 0; i < numerosSorteados.length; i++){
    const numeroSorteado = numerosSorteados[i];
    if (numeroSorteado > maiorValor){
        maiorValor = numeroSorteado;
    };
};
 */


/**
print(get());

 */

/*

Exercício 1 - importação e exportação

    - Uma sa la contem 5 alunos e para cada a luno foi sorteado  um súmero de 1 - 100.
    - Faça um programa que receba os 5 números sorteados para os alunos e mostro o maior número sorteado.

    Dados de entrada:
    5
    50
    10
    98
    23

    Saída:
    98    

 */






