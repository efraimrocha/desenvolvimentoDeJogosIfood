
/**
Desafio
Você deve desenvolver um programa que simule um RPG com um loop de repetição 
e concatenação. O programa deve solicitar o nome do personagem e, em seguida, 
pedir que o usuário escolha entre "Atacar" ou "Fugir". Caso o usuário escolha 
uma ação inválida, o programa deve exibir uma mensagem de erro e permitir que 
o usuário tente novamente

Entrada:
O programa deve solicitar ao usuário que insira o nome do personagem e a ação 
que ele deve realizar (Atacar ou Fugir). O nome e a ação deve ser inserido como 
uma String.

Saída:
Após receber o nome do personagem e a ação escolhida, o programa deve exibir 
uma mensagem informando qual ação foi escolhida pelo personagem, concatenando 
o nome do personagem com a ação escolhida. Em caso de ação inválida, o programa 
deve exibir a mensagem de erro: "Tente novamente". Veja exemplos abaixo:

Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas 
saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com 
outros casos possíveis.

Entrada	Saída
Jubileu
Fugir

Jubileu escolheu Fugir!


Elsa Yajin
Atacar

Elsa Yajin escolheu Atacar!
Ragnar
Correr

Tente novamente

 */


/**
class Personagem {
    
    constructor(nome,acao) {
        this.nome = nome
        this.acao = acao
    };

    print() {
        console.log(`${this.nome} escolheu ${this.acao}`);
    };
};

const p1 = new Personagem('Jubileu', 'Fugir');
p1.print();
 */


//---------------------------------------------------------

class Personagem {

    nome;
    acao;

    constructor(nome, acao) {
        this.nome = process.stdin.on('data', (data) => {
                this.nome = data.toString().trim(); // Convertendo os dados para uma string e removendo espaços em branco
          
            // Exibindo a entrada do usuário
            console.log(`Você digitou: ${nome}`);
          
            // Encerrando o processo
            process.exit();
          });
          
          // Solicitando uma entrada de texto
          console.log('Escolha o nome do personagem: ');

        this.acao = acao;
    }

    getAcao(acao) {
        process.stdin.on('data', (data) => {
            this.acao = data.toString().trim(); // Convertendo os dados para uma string e removendo espaços em branco
          
            // Exibindo a entrada do usuário
            console.log(`Sua ação foi: ${acao}`);
          
            // Encerrando o processo
            process.exit();
          });
          
          // Solicitando uma entrada de texto
          console.log('Escolah sua ação entre "Atacar" e "Fugir": ');
    }

    print() {
        console.log(`${this.nome} escolheu ${this.acao}!`);
    }
}

// Função para validar a ação escolhida
function validarAcaoEscolhida(acao) {
    return acao === "Atacar" || acao === "Fugir";
}
/**
// Loop para solicitar nome e ação até que uma ação válida seja escolhida
let personagem;
do {
    // Solicitar ao usuário que insira o nome do personagem
    const nomePersonagem = read('Efraim');

    // Solicitar ao usuário que escolha entre "Atacar" ou "Fugir"
    const acaoEscolhida = read('fugir');

    // Validar a ação escolhida
    if (validarAcaoEscolhida(acaoEscolhida)) {
        // Criar um objeto Personagem com o nome e ação escolhida
        personagem = new Personagem(nomePersonagem, acaoEscolhida);

        // Imprimir a mensagem correspondente
        personagem.print();
    } else {
        // Exibir mensagem de erro e pedir ao usuário para tentar novamente
        console.log("Tente novamente");
    }
} while (!personagem);
 */

function main(){
    
}




  
