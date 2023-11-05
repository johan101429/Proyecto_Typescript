// Crear una clase Hotel con propiedades como nombre y ubicación. Crear clase Habitación con número de 
// habitación, precio y estado. Agregar métodos para reservar y liberar habitación. Probar con algunos hoteles e 
// interacciones.


class Hotel {

    nombre:string;
    ubicacion:string;
    
    constructor(nombre:string,ubicacion:string){
    
        this.nombre=nombre;
        this.ubicacion=ubicacion;
    
    }
    
    describir(){
    
        console.log(`Bienvenido al hotel ${this.nombre} ubicado en ${this.ubicacion}`);
    
    
    }
    
    }
    
    class Habitacion {
    
    numeroHabitacion:number;
    precio:number;
    estado:string;
    
    constructor(numeroHabitacion:number,precio:number,estado:string){
    
    this.numeroHabitacion=numeroHabitacion;
    this.precio=precio;
    this.estado=estado;
    
    }
    
    reservar() {
        if (this.estado === 'Disponible') {
            this.estado = 'Reservada';
            console.log(`Habitación número ${this.numeroHabitacion} reservada con éxito.`);
        } else {
            console.log(`Lo sentimos, la habitación número ${this.numeroHabitacion} no está disponible para reservar.`);
        }
    
    }
    
    liberar() {
        if (this.estado === 'Reservada') {
            this.estado = 'Disponible';
            console.log(`Habitación número ${this.numeroHabitacion} liberada con éxito.`);
        } else {
            console.log(`La habitación número ${this.numeroHabitacion} no puede ser liberada, ya que no está reservada.`);
        }
    }
    
    }
    
    const hotel1 = new Hotel('Paraiso', 'Armenia - Quindio');
    
    const habitacion1 = new Habitacion(101, 40000, 'Disponible');
    
    
    hotel1.describir();
    habitacion1.reservar();
    habitacion1.reservar();
    habitacion1.liberar();
    habitacion1.reservar();
    