const lista = [1,2,3,4,5,6,7,8,9,10]

// O filter nos retorna uma lista nova.
// Neste caso do exemplo abixo nos retorna apenas  os números pares
// Funciona recebendo um boolean, se form true, fica na nova lista.
// A lista original não sofre alteração alguma.

const listaDeNumerosPares = lista.filter((element) => {
    return (element % 2 === 0)
})

//console.log(listaDeNumerosPares)
//----------------------------------------------------------------

function  obterMensagem(tipoMagia){


    const mensagens = {
        ataque: "Usou magia de ataque!",
        cura: "Usou magia de cura!",
        defesa: "Usou magia de defesa!",
        invalido: "Tipo de magia inválido!"
    };
    
    return mensagens[tipoMagia] || mensagens.invalido;
}

//const mensagem = obterMensagem('cura')
//console.log(mensagem)

const quantidade = 5
const tipoMagia =  'defesa';


for (let i = 0; i < quantidade; i++) {
    const mensagem = obterMensagem(tipoMagia)
    console.log(mensagem);
  }