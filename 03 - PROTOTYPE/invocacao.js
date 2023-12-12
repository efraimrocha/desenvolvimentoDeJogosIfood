const pessoa = {
    nome: 'Efraim',
    idade: 30
}

function gritar(prefixo){
    console.log(prefixo,this.nome)
}


//Forma 1
gritar('olá!')

//Forma 2
gritar.apply(pessoa,['Oláaaaaa'])

//Forma 3
gritar.call(pessoa, 'Hahahah', 'Tubem!')



