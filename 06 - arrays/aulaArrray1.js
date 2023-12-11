/**
const alunos = ['joao','efraim','maria'];

alunos[2] = 'cinicios'; 
alunos.push(50);
// push - add  no fim


// pop - remove o ultimo da lista
console.log(alunos.pop());


// shift() - remove o primeiro da lista.
console.log(alunos.shift());

console.log(alunos);

 */

//---------------------------------------------------------------------------------------

// Entendendo as necessidades de estruturas de repetição.

const notas = [];

notas.push(8);
notas.push(9);
notas.push(6);
notas.push(7);



let soma = 0;
function adcionarNota(nota){
    notas.push(nota);
}

function calcularMedia(){

    for (let i = 0; i < notas.length; i++) {
        const nota = notas[i];
        soma = soma + nota;
    
    }
    
    const media = soma / notas.length;
    console.log(media);
    
};
adcionarNota(10);
adcionarNota(9.5);
console.log(notas);
calcularMedia();






//const nome ='Efraim';

// Iterando uma string.
/**
for (let i = 0; i < nome.length; i++){
    const letra = nome[i];
    console.log(letra);
}
 */
// Iterando um intervalo.
/**
for (let i = 0; i < 10; i++) {
    console.log(i);   
}
*/

