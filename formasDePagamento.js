
// 1 - Débito à vista, 10% de desconto;
function debitoAVista(valor){
    return valor = valor - (valor * 0.1);
}

// 2 - Em espécio ou PIX, 15% de desconto;
function especieOuPix(valor){
    return valor = valor - (valor * 0.15);
}

// 3 - Em duas vezes no crédito, valor normal sem juros;
function duasVezes(valor){
    return valor;
}

// 4 - Acima de duas vezes, acressimo de 10% de juros;
function tresOuMais(valor){
    return valor = valor + (valor * 0.1)
}

console.log(debitoAVista(100));
console.log(especieOuPix(100));
console.log(duasVezes(100));
console.log(tresOuMais(100));
