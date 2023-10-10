/*6. Una pizzería “Italiana pizza” es un establecimiento que ofrece comida preparada principalmente a base de pizza,
sándwiches y ensaladas. Hacer un programa en JavaScript que cumpla los siguientes requisitos o características
(programa básico-simulación):
a. se muestra al usuario un menú de opciones así: 1. Pizza 2. Sándwiches 3 ensaladas
b. Dependiendo de la opción seleccionada (producto escogido) se pide la cantidad de porciones.
• Pizza a 7000 por unidad
• Sándwich a 5000 unidad
• Ensalada a 15000 unidad
c. Se le pide al usuario si desea agregar salsa que vale 3000.
d. El sistema indica el costo que paga el cliente por su producto.*/

// const menuUsuario:number = Number(
//     prompt("elije 1. para pizza , 2. para sandwiches y 3. para ensaladas ")
//   );
const menuUsuario:number = 2;
  // const cantidadProductos:number = Number(
  //   prompt("por favor ingrese la cantidad de producto")
  // );
  const cantidadProductos:number = 12;
  // const adiccionSalsa:number = Number(prompt(" desea adicionar salsa 1. Si , 2. No"));
  const adiccionSalsa:number = 1;
  let unidadPizza:number = 7000;
  let unidadSandwich:number = 5000;
  let unidadEnsalada:number = 15000;
  let agregarSalsa:number = 0;
  let totalPedido:number = 0;
  let respuesta:string = "";
  
  if (adiccionSalsa == 1) {
    agregarSalsa = 3000;
  }
  
  switch (menuUsuario) {
    case 1:
      totalPedido = cantidadProductos * unidadPizza + agregarSalsa;
      respuesta = `el costo total a pagar  es $${totalPedido}`;
  
      break;
    case 2:
      totalPedido = cantidadProductos * unidadSandwich + agregarSalsa;
      respuesta = `el costo total a pagar  es $${totalPedido}`;
  
      break;
    case 3:
      totalPedido = cantidadProductos * unidadEnsalada + agregarSalsa;
      respuesta = `el costo total a pagar  es $${totalPedido}`;
      break;
  
    default:
      break;
  }
  
  console.log(respuesta);
  