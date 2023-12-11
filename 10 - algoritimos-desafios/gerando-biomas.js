entrada = ['4','3','2'];
let i = 0;

function gets(){
  const valor = entrada[i];
  i++;
  return valor;
};


function print(texto){
  console.log(texto);
};
const quantidadeGolpes = parseInt(gets());


let minerais = ["Carvao", "Ferro", "Diamante", "Pedra"];

// Loop para cada golpe, de 1 até a quantidade informada
for (let i = 0; i <= quantidadeGolpes-1; i++) {
  // Calcula o índice do mineral usando o operador de módulo (%) para garantir que o índice esteja dentro do tamanho do array
  let minaIndex = i % minerais.length;
  
  

  // TODO: Agora exiba o índice i, concatene com o caractere ":", após, concatene com tipo de minerais[minaIndex]:
  print(i+1 + ': ' + minerais[minaIndex]);

};