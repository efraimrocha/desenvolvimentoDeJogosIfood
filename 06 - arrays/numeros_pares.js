const numeros = []
const numerosPares = [];
const intervalo = 10;

// Preenche a lista com valore até 20
for (let i = 0; i < intervalo; i++){

    // Adiciona o item á lista de númeors
    numeros.push(i);

    // Verifica se o número é par ou ímpar usando o método pelo módulo do númemo.
    if (i % 2 === 0){
        // Caso seu módulo for 0...
        
        //Adiciona o valor par à lista de numerosPares
        //numerosPares.push(i);

        // Imprime no console o valor par a cada iteração.
        console.log(i);
    };
};

/**
for (let i = 0; i < numeros.length; i++){
    const numero = numeros[i];
   
};
 */

