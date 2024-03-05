// const toppings = document.getElementsByClassName('topping')
// console.log(toppings[2])
//?selecciona un elemento por su clase

// const misToppings = document.getElementsByTagName('li')
// console.log(misToppings)

// //?selecciona por una etiqueta

// const toppingsFondoMarron = document.getElementsByClassName('fondo-marron')
// console.log(toppingsFondoMarron)
// //? selecciona por clase

// const aceitunas = document.querySelector('#aceitunas')
// console.log(aceitunas)
// //? selecciona el elemento con la id aceitunas pero es una alternativa a al getElementById

// const primerToppingNaranja = document.querySelector('.topping.fondo-naranja')
// console.log(primerToppingNaranja)

// //!EN este caso seleccionara el PRIMER elemento con la clase topping y tambien el PRIMER elemento con la clase fondo-naranja

// const primerToppingNaranja = document.querySelector('ul li.fondo-naranja')
// console.log(primerToppingNaranja)
// //?forma alternativa de seleccion  del toppingnaranja

const primerToppingNoMarron = document.querySelector("ul li:not(.fondo-marron");
console.log(primerToppingNoMarron);
//?selecciona el primer elemento li de la ul que no tenga la class fondo-marron
//? asi que retorna cebolla ya que es el primer elemento de la li que no tiene fondo marron
const primerToppingNoMarron = document.querySelector("ul li:not(.fondo-marron");
console.log(primerToppingNoMarron)


