// // Crear una clase FiguraGeometrica y subclases Triángulo, Círculo y Cuadrado. Implementar el método area() en 
// // cada subclase. Crear objetos y calcular sus áreas.


interface IFiguraGeometrica{
    color:string;
   area():number; 
}


class FiguraGeometrica {
    color:string;

    constructor(color:string){

        this.color=color;
}
}


class Triangulo extends FiguraGeometrica implements IFiguraGeometrica {

     base: number;
     altura: number;

    constructor(base: number, altura: number) {
        super("Azul");
        this.base = base;
        this.altura = altura;
    }

    area(): number {
        return 0.5 * this.base * this.altura;
    }


    }







class Circulo extends FiguraGeometrica implements IFiguraGeometrica{

    radio: number;

    constructor(radio: number) {
        super("Rojo");
        this.radio = radio;
    }

    area(): number {
        return Math.PI * this.radio ** 2;
    }

}

class Cuadrado extends FiguraGeometrica implements IFiguraGeometrica{

     lado: number;

    constructor(lado: number) {
        super("Verde");
        this.lado = lado;
    }

    area(): number {
        return this.lado ** 2;
    }

}

const figura1= new Cuadrado (2);
const figura2= new Triangulo (4,2)
const figura3= new Circulo (10)

console.log(`El cuadrado de color ${figura1.color} tiene un area de ${figura1.area()}`)
console.log(`El triangulo de color ${figura2.color} tiene un area de ${figura2.area()}`)
console.log(`El circulo de color ${figura3.color} tiene un area de ${figura3.area()}`)