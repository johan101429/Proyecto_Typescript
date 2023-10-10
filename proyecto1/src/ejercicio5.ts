/*8. Para verificar si un triángulo es equilátero, se deben comprobar que los tres lados del triángulo tienen la misma
longitud.
a. Pedir al usuario los lados y determinar si es equilátero o no*/

let lado1:number =2;
let lado2:number =2;
let lado3:number =2;
  
if (lado1 == lado2 && lado2 == lado3) {
    console.log (` su triangulo es equilatero ya que los sus lados son : ${lado1} x ${lado2} x ${lado3} ` );

}else {
    console.log( " su triangulo no es equilatero")
}