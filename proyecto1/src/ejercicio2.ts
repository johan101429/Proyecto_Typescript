/*los sticker son etiquetas adhesivas diseñadas para ser pegadas en objetos, como lápices, libretas, cuadernos,
pizarras, muebles, etc. Se utilizan para decorar y personalizar los productos de una manera barata y sencilla.
Hacer un programa en JavaScript que cumpla los siguientes requisitos o características (programa básico-
simulación):a. Se solicita al usuario el tamaño del stikers, pequeño o grande.
• Costo pequeño es de 4000 y costo del grande 6000
b. Se pide al usuario la cantidad de estikers teniendo en cuenta que solo se pueden enviar mínimo 10; Sino
debe indicarse al usuario un numero correcto.
c. El sistema debe arrojar cuanto es el costo total para pagar*/
 
  const tamañoSticker: number =2 ;
  const cantidadStickers: number =1 ;
  
  const valorStickers = (tamaño: string, cantidad: number): string => {
    const costoPequeño: number = 4000;
    const costoGrande: number = 6000;
    let costoTotal: number = 0;
    let respuesta: string = "";
  
    if (cantidad < 10) {
      respuesta = `La cantidad de stickers debe ser mínimo 10 para el envío.`;
    } else {
      if (tamaño === "pequeño") {
        costoTotal = costoPequeño * cantidad;
        respuesta = `El costo total a pagar es $${costoTotal}`;
      } else if (tamaño === "grande") {
        costoTotal = costoGrande * cantidad;
        respuesta = `El costo total a pagar es $${costoTotal}`;
      } else {
        respuesta = "El tamaño del sticker no es válido.";
      }
    }
  
    return respuesta;
  }
  
  const resultado: string = valorStickers("tamañoSticke", cantidadStickers);
  
  console.log (resultado);
  