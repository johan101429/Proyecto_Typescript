// Crear una clase CuentaBancaria con propiedades como número de cuenta, titular y saldo. Agregar métodos para
// depositar, retirar y consultar saldo. Crear varias cuentas y probar los métodos.

class CuentaBancaria {
    numeroCuenta: number;
    titular: string;
    saldo: number;
    dineroIngresado: number;
    dineroRetirado: number;
  
    constructor(
      numeroCuenta: number,
      titular: string,
      saldo: number,
      dineroIngresado: number,
      dineroRetirado: number
    ) {
      this.numeroCuenta = numeroCuenta;
      this.titular = titular;
      this.saldo = saldo;
      this.dineroIngresado = dineroIngresado;
      this.dineroRetirado = dineroRetirado;
    }
  
    depositar() {
      this.saldo += this.dineroIngresado;
  
      console.log(`Felicitaciones, deposito exitoso de ${this.dineroIngresado}`);
    }
  
    retirar() {
      this.saldo -= this.dineroRetirado;
  
      console.log(`Retiro exitoso de ${this.dineroRetirado}`);
    }
  
    consultarSaldo() {
      console.log(
        `El saldo de el número de cuenta ${this.numeroCuenta}, a nombre de ${this.titular}, tiene un saldo de ${this.saldo}`
      );
    }
  }
  
  const cuenta1 = new CuentaBancaria(1, "Juanjo", 1000000, 500000, 0);
  
  cuenta1.depositar();
  cuenta1.consultarSaldo();