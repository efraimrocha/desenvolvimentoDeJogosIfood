
/** Aqui segue um exemplo de sobrescrita do método.
 * 
 * 
 
const pessoa = {
    idade: 18
};

const efraim = {
    nome: 'Efraim',
    idade: 30,
    __proto__: pessoa
};
*/


// Imprime idade 30, pois se ele achar esse valor no objeto, ele já retorna com esse valor.
// Caso contrário, vai até o protótipo busca-lo.

//console.log(efraim.idade);


//////////////////////////////////////////////////
// -------- Forma mais simples de criar um objeto é a literal
/**
const pessoa = {
    genero: 'maculino'
}
const efraim = {
    nome: 'Efraim',
    __proto__: pessoa
}
 */


// Outra forma...

const pessoa = {
    genero: 'maculino'
}
const efraim = Object.create(pessoa)

console.log(efraim.genero)

//console.log(efraim.genero)

