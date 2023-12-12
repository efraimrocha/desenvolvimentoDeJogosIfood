/**
/ Formas de fazer herança e polimorfismo no javascript.
const pessoa = {
    genero: 'masculino'
}


const efraim = {
    nome: 'Efraim',
    idade: 30,
    // Aqui extendemos a classe pessoa para objeto efraim.
    __proto__: pessoa
}

// Imprime o gênero herdado.
console.log(efraim.genero);
*/

//--------------------------------------------------
/**
// Uma função que começa comletra maiúscula sigjnifica que ela é uma fmunção contrutora.

function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
};

Pessoa.prototype.falar = function (){
    console.log(`Meu nome é ${this.nome}`);
};

const efraim = new Pessoa('Efraim', 30);

efraim.falar();

*/
/**
A escrita com class é a mesma coisa que o código a cima.
Ao final de tudo em uma classe java script, tudo é convertido
em uma função construtora e depois ao protótipo.

 */
class Pessoa {
    
    constructor(nome,idade) {
        this.nome = nome
        this.idade = idade
    };
    
    falar() {
        console.log(`Meu nome é ${this.nome}`);
    };
};

const p1 = new Pessoa('Efraim', 30);
p1.falar();