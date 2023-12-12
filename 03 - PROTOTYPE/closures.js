
/**
 Neste caso a capacidade de armazenar o valor de x para suas chamadas posteriores
 é que é chamada closures.

 Como se x permanesesse como uam constante e y uma variável.
 */

function soma(x){
    return function(y) {
        return x + y
    }
}

// O mesmo serva para as arrows funtions.
function soma(x){
    return (y) => {
        return x + y
    }
}

const somaParcial = soma(10);

//console.log(soma(10)(20))

console.log(somaParcial(20))
console.log(somaParcial(30))
console.log(somaParcial(40))