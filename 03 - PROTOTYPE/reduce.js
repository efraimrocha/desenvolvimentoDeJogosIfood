/** Reduce
 * Pecorrendo uma lista e transformando um
 * único valor
 * 
 * Como fazer isso?
 * 
 * Temos a lista a seguir e queremos reduzi-la a soma de todos os seus valores.
 */

const lista =[1,2,3,4,5,6,7,8,9,10];

const somaDeTodosNumeros = lista.reduce((previous, current) => {
    console.log(previous, current)
    return previous + current
}, 0) // O valor 0 como segundo parâmetro serva para informar o índice que ele deve iniciar.
//ATENÇÂO!!!
// No caso da lista não ter nada, e não tivermos passado o valor 0, será retornado um erro informando que não se tem inicial value.


console.log(somaDeTodosNumeros)