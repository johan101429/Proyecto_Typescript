// Crear una clase Persona con propiedades como nombre, edad, documento identidad y métodos como caminar(),
// hablar(), comer(). Crear algunos objetos Persona e interactuar con sus propiedades y métodos.

class Persona {
    nombre: string;
    edad: number;
    id: number;
  
    constructor(nombre: string, edad: number, id: number) {
      this.nombre = nombre;
      this.edad = edad;
      this.id = id;
    }
  
    caminar() {
      console.log(`${this.nombre} está caminando`);
    }
  
    hablar() {
      console.log(`${this.nombre} está hablando`);
    }
  
    comer() {
      console.log(`${this.nombre} está comiendo`);
    }
  
    saludar() {
      console.log(
        `Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y mi documento de identificación es ${this.id}`
      );
    }
  }
  
  const persona1 = new Persona("johans", 28, 123123123);
  const persona2 = new Persona("nataly", 14, 543435);
  
  persona1.caminar();
  persona1.hablar();
  persona1.comer();
  persona1.saludar();
  persona2.saludar();