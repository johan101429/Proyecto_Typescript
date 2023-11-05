// Crear una clase Vehículo con subclases Coche, Barco y Avión. Cada subclase implementa su propio método 
// desplazarse (). Crear objetos de las subclases y probar sus métodos

interface IVehiculo {

    numeroLlantas:number;
    desplazarse():void;
    }
    
    class Vehiculo {
    
        numeroLlantas:number;
    
    constructor(numeroLlantas:number){
    
        this.numeroLlantas=numeroLlantas;
    }
    
    }
    
    class Coche extends Vehiculo implements IVehiculo{
    
    constructor (){
    
        super(4)
    
    }
    
    desplazarse() {
        console.log(`El auto se mueve con ${this.numeroLlantas}`);
    
    }
    
    }
    
    class Barco extends Vehiculo implements IVehiculo{
    
        constructor (){
    
            super(0)
    
        }
    
        desplazarse() {
            console.log(`El barco se mueve con ${this.numeroLlantas}`);
    
        }
    
        }
    
        class Avion extends Vehiculo implements IVehiculo{
    
            constructor (){
    
                super(0)
    
            }
    
            desplazarse() {
                console.log(`El avion se mueve con ${this.numeroLlantas} llantas`);
    
            }
    
            }
    
            const carro1 = new Coche ();
            const barco1 = new Barco ();
            const avion1 = new Avion ();
    
            carro1.desplazarse();
            barco1.desplazarse();
            avion1.desplazarse();