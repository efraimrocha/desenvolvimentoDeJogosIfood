
function Pessoa(nome, idade){
    this.nome=nome
    this.idade=idade

}

Pessoa.prototype.falar = function (){
    console.log(`Meu nome é: ${this.nome}`)
}

const efraim = {
    genero: 'masculino'
}

Pessoa.call(efraim,'Efraim',30)
console.log(efraim)
