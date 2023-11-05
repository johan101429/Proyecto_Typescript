interface IDetail<T> {
    id: T;
}
class Detail<T> implements IDetail<T> {
    id: T;
    constructor(id: T) {
        this.id = id;
    }
}

const detail1 = new Detail<number>(10000);
detail1.id;
const detail2 = new Detail<string>('jhola');
detail2.id;

console.log(detail2.id);
console.log(detail1.id);
//_____________  INTERFACE GENERICA  Y FUNCION GEERICA ________________________________________________//

interface GenericIdentityfn<T> {
    (arg: T): T;
}
function identity<T>(arg:T): T {
return arg;
}
let myIdebtity: GenericIdentityfn<number> = identity;
let myIdebtity2: GenericIdentityfn<string> = identity;

console.log(myIdebtity(45));
console.log(myIdebtity2('johan'));

//_________ CLASES GENERICA ___________________________________________//

interface OperacionInterface {
    operar():number | string;
}

class Operacion<T> implements OperacionInterface {

    a: T;
    b:T;
    constructor(a:T,b:T){
        this.a = a;
        this.b = b;
    }
    operar() {
        if (typeof this.a === "number" && typeof this.b === "number") {
        return this.a + this.b;    
        } else {
            return String(this.a) + String(this.b);
        }
    }
}

const suma  = new Operacion<number>(12,28);
const concat = new Operacion<string>("hola" , "johan");

console.log(suma.operar());
console.log(concat.operar());

//______________________________________ CLASE GENERICA PARA REPESENTAR LA CUENTA __________________//

class CuentaBancaria<T extends number> {
    saldo: any;
    constructor(saldoInicial: T){
        this.saldo = saldoInicial;
    }
    getSaldo(){
        return this.saldo;
    }
    retirar(monto: number){
        this.saldo -= monto;
    }
    depositar (monto: T){
        this.saldo += monto;
    }
}

const cuentaAhorros = new CuentaBancaria<number>(100);
console.log(cuentaAhorros.getSaldo());

cuentaAhorros.retirar(50);

cuentaAhorros.depositar(3);

console.log(cuentaAhorros.getSaldo());

 //________________________ INTERFACE GENERICA PARA MODELO DE RESERVA _____________//
interface Reserva<T> {
    id:string;
    huesped:string;
    habitacion:T;

}
class Habitacion {
 numero: number;
 tipo:string;
  
 constructor(numero:number,tipo:string){
    this.numero = numero;
    this.tipo =tipo;
 }
}
class ReservaHotel implements Reserva<Habitacion> {
    id:string;
    huesped: string;
    habitacion: Habitacion;

    constructor(id:string,huesped:string,habitacion:Habitacion){
        this.id = id;
        this.huesped = huesped;
        this.habitacion = habitacion;

    }
}

const habitacion101 =new Habitacion(101,'strandar');
const reserva = new ReservaHotel('R001',' juan perez', habitacion101);

console.log(reserva.id);
console.log(reserva.huesped);
console.log(reserva.habitacion.numero);




