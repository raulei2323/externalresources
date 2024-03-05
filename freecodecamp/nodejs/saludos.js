//?--------------------exportador------------------


function saludar (nombre) {
    return `Hola ${nombre}`

}

function saludarholamundo (){
    return 'Hola mundo'
}

//? una forma de exportar una y dos cosas
//comentadas para que funcione la forma de abajo que usa corchetes
// module.exports.saludar = saludar
// module.exports.saludarholamundo = saludarholamundo

//?------------------------------------------------
//?------forma alternativa de exportar varias funciones-----
module.exports = {
    saludar: saludar,
    saludarholamundo: saludarholamundo

}
//!no olvidar la coma del array de exports---------