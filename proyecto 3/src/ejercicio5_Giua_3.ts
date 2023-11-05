// Crear una clase Electrodoméstico con subclases Televisor, Nevera y Lavadora. Cada electrodoméstico tiene 
// propiedades como precio y color. Crear algunos objetos y probar.


class Electrodomestico {

    precio:number;
    color:string;
    
    constructor(precio:number,color:string) {
        this.precio=precio;
        this.color=color;
    }
    
    prender(){
    
    console.log("El electrodomestico se ha encendido");
    
    
    }
    
    apagar(){
    
       console.log("El electrodomestico se ha apagado");
    
    }
    
    }
    
    
    
    class Televisor extends Electrodomestico {
    
        constructor(precio:number,color:string) {
            super(precio,color);
        }
    
    describir(){
    
    
        console.log(`El televisor tiene un precio de ${this.precio} y su color es ${this.color}`);
    
    }
    
    }
    
    class Nevera extends Electrodomestico {
        constructor(precio:number,color:string) {
            super(precio,color);
        }
        describir(){
    
    
            console.log(`La nevera tiene un precio de ${this.precio} y su color es ${this.color}`);
    
        }
    
    }
    
    class Lavadora extends Electrodomestico {
        constructor(precio:number,color:string) {
            super(precio,color);
        }
    
        describir(){
    
    
            console.log(`La lavadora tiene un precio de ${this.precio} y su color es ${this.color}`);
    
        }
    
    }
    
    
    const nevera1 = new Nevera (100000,"Azul")
    const lavadora1= new Lavadora (200000,"Blanca")
    const televisor1= new Televisor (500000, "Negro")
    
    nevera1.prender();
    nevera1.apagar();
    nevera1.describir()
    lavadora1.prender();
    lavadora1.apagar();
    lavadora1.describir()
    televisor1.prender();
    televisor1.apagar();
    televisor1.describir()