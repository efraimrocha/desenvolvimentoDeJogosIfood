
class Pessoa{
    constructor(name) {
        this.name = name
    }
}

const lista = [new Pessoa('Efraim'), new Pessoa('Rita'), new Pessoa('Joao')]

// ---------- Uso do for --------------------------
// Forma convencional para  converter a lista de objetmos pessoas para uma lista de nomes.
/**
for (let i = 0; i < lista.length; i++){
    const element = lista[i]
    listaNomes.push(element.name)
}
*/

//--- map() ---------------------------------------------------------------
// Retorna uma lista com os elemnetos mapeados que tenham a chave name.
// Ele converte o elemento em uma string

/**
const listaNomes = lista.map((element, i) => {
    return `${i} - ${element.name}`
})
 */

//-- Usando o map() sem corpo ---------------------------------------------------------------------
/** Um acaracteística bem legla das arrow functions é´que não necessitam de corpo.
trazendo uam escrita ainda mais limpa. Como o exemplo abaixo
 */

const listaNomes = lista.map((element) => element.name)

const listaEmHtml = lista.map((element) => {
    return `
        <li>
            ${element.name}
        </li>
    `
})

console.log(listaNomes)
console.log(listaEmHtml)
