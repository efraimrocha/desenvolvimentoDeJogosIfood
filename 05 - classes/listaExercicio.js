// 1)
class Carro{
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    };

    calcularGastroDeTrajeto(distancia, precoCombustivel) {
        return (distancia * this.gastoMedioPorKm) * precoCombustivel;
    }

};



const uno = new Carro('Fiat','Preta',1/12);
const palio = new Carro('Palio','Branco', 1/10);

console.log(uno.calcularGastroDeTrajeto(70,5));
console.log(palio.calcularGastroDeTrajeto(70,5));


