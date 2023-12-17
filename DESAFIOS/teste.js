class Personagem {
    
    constructor(nome,acao) {
        this.nome = nome
        this.acao = acao
    };

    print() {
        console.log(`${this.nome} escolheu ${this.acao}`);
    };
};


const readline = require('readline');

// Criando uma interface readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// Solicitando ao usuário que digite o nome do personagem
rl.question('Digite o nome do personagem: ', (nome) => {
    personagem.nome = nome;

  // Solicitando ao usuário que digite a ação do personagem
rl.question('Digite a ação do personagem: ', (acao) => {
    personagem.acao = acao;

    

    // Exibindo as informações do personagem
    /**console.log(`\nInformações do personagem:`);
    console.log(`Nome: ${personagem.nome}`);
    console.log(`Ação: ${personagem.acao}`);
    */
    // Fechando a interface readline
    rl.close();
    return `${personagem.nome} escolheu ${personagem.acao}!`

  });
});


// Objeto de personagem
const personagem = new Personagem(rl.question.nome,rl.question.acao)
console.log(personagem)