const lista = [1,2,3,4,5,6,7,8,9,10]

// O filter nos retorna uma lista nova.
// Neste caso do exemplo abixo nos retorna apenas  os números pares
// Funciona recebendo um boolean, se form true, fica na nova lista.
// A lista original não sofre alteração alguma.

const listaDeNumerosPares = lista.filter((element) => {
    return (element % 2 === 0)
})

console.log(listaDeNumerosPares)
