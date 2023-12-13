
const lista = [{nome: 'Efraim'}, {nome: 'Rita'}, {nome: 'Jose'}, {nome: 'Eduardo'}]

//---------------------------------------------------------------------
/**
console.log(
    
    lista.map((e) => e.nome)// Faz o mapeamento dos elementos nomes.
        .filter((e) => e.startsWith('E')) //Filtra somente os nomes que começam com a letra 'E'.
        .join('; ') // Junta os elementos encontrados separando-os por ';'
)
    
console.log(lista.map((e) => e.nome).join('; '))
 */

//---Usando o filter, map e join para criação de html-------------------------------------------------------------------------
const elementosEmHtml = lista
    .filter((e) => e.nome.startsWith('E'))
    .map((e) => `<li>${e.nome}</li>`)
    .join('')

console.log(elementosEmHtml)
// Resultado esperado: <li>Efraim</li><li>Eduardo</li>