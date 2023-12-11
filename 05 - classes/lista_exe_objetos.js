/***
class Pessoa{
    nome;
    peso;
    altura;

    constructor (nome,peso,altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    };

    calcularImc(){
        return this.peso / (this.altura * this.altura);

    };

    classificarImc(){
        const imc = this.calcularImc();

        if(imc < 18.5 ){
            return 'Abaixo do peso';
        }else if(imc >= 18.5 && imc < 25){
            return 'Peso normal';
        }else if(imc >= 25 && imc < 30){
            return 'Acima do peso';
        }else if(imc >= 30 && imc < 40){
            return 'Obeso';
        }else{
            return 'Obesidade grave';
        };
    };
};


class Ensaio {
    nome;
    servico;
    horario;
    periodo;
    valorHoraEnsaio = 30;

    constructor(nome, servico, horario,periodo){
        this.nome = nome;
        this.servico = servico
        this.horario = horario;
        this.periodo = periodo;
    };

    calcularEnsaio(){
        return this.periodo * this.valorHoraEnsaio;
    }

    calcularGravacao(){
        return
    }


}


/**
class Gravacao{
    nome;
    horario;
    periodo;
    valorPorHora = 50;
}
**/
/**
const p1 = new Pessoa('Efraim',105,1.8);
const p2 = new Pessoa('Rita',57,1.6);

const ensaio1 = new Ensaio('Caminhos do rock',)

console.log(p1.calcularImc(),p1.classificarImc());
console.log(p2.calcularImc(),p2.classificarImc());
 */
const dev = {
    nome: 'Renan',
    linguagemPreferida: 'JavaScript'
};

console.log(dev.linguagemPreferida);

