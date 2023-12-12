/**
const renan = {
    nome: 'Renan'
}

renan.__proto__ = {
    idade: 30
}

console.log(renan.idade)
*/
function Pessoa(nome) {
    this.nome = nome
}

Pessoa.prototype.falarSeuNome = function () {
    console.log(`Meu nome é ${this.nome}`)
}

const renan = new Pessoa('renan')
renan.falarSeuNome()