/**
Funções e Manipulação de Listascom JavaScript
First Class Functions, Higher Order Functions, Function Declaration e Function Expression
 */

function falarMeuNome(){
    console.log('Meu nome é Efraim')
}

function falarMeuNomeCompleto(falarMeuNome){
    falarMeuNome()
    console.log('Santos Rocha')
    return falarMeuNome
}

falarMeuNomeCompleto(falarMeuNome)()


// Funcion expression e funcion declarator

//---- Funcion declaration sofre hoisting
// NO hoiting todas as declaração vão ser jogadas lá pra cuima.
function nomeDaFuncao(){

}

// Funcion expression
//  declaração da constante vai ser jogada para cima e sua atribuição ficará para baixo.
const outraFuncao = function(){

}
