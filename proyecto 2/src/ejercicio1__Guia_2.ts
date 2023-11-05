
// 1.Crea una interface Vehicle con propiedades comunes a distintos vehículos como model, year, color, etc. Luego
// crea interfaces Car y Motorcycle que hereden de Vehicle y tengan propiedades específicas, implemente en una
// clase.

interface IVehicle {
    modelo: number;
    marca: string;
    serie: string;


}

interface ICar extends IVehicle {
    tipo: string;
    transmision: string;
    puertas: string;
    estructura: string;

}
interface IMotorcycle extends IVehicle {
    tipo: string;
    direccion: string;
    frenos: string;
    combustible: string;

}

class Car implements ICar {
    modelo: number;
    serie: string;
    tipo: string;
    transmision: string;
    puertas: string;
    estructura: string;
    marca: string;

    constructor(modelo:number,marca:string,serie:string,tipo:string,transmision:string,puertas:string,estructura:string){
        this.modelo = modelo;
        this.marca = marca;
        this.serie = serie;
        this.tipo = tipo;
        this.transmision = transmision;
        this.puertas = puertas;
        this.estructura = estructura;

    }

}

let carro = new Car(2016,"logan","automovil","automatica","4 puertas","rigida","");

console.log(carro);

