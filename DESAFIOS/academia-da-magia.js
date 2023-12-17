

const quantidade = 5;
const tipoMagia =  'defesa';

// Obtem a mensagem correspondente ao tipo de magia
const mensagem = obterMensagem(tipoMagia);


//TODO: Crie uma função ou outra estrutura condicional para retornar a mensagem correspondente ao tipo de magia:
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


for (let i = 0; i < quantidade; i++) {
  const mensagem = obterMensagem(tipoMagia)
  console.log(mensagem);
}