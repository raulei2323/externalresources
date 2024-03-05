//?-----------While------

// let contador = 1

// while ( contador <= 10 ) {

//     console.log('Vuelta numero ' + contador)
//     contador ++
// }

///////////////////////////////////////////////////////
//?---------For--------

// let contadorUsandoFor

// for (let contadorUsandoFor = 0; contadorUsandoFor < 10; contadorUsandoFor++ ) {
//     console.log('Vuelta numero ' + contadorUsandoFor + ' usando "for"')
// }
//?convencionalmente se usa la letra i minuscula para nombrar el contador.....



for (let bankMoney = 0; bankMoney <= 10; bankMoney++ ) {
    console.log('Vuelta numero ' + bankMoney + ' usando "for" y usando "bankMoney" como variable iniciando la variable dentro del for')
}

//?se puede usar una  variable externa al for.....se puede no poner let antes de la variable, pero es mas entendible si se usa la sintaxis dada.....
//////////////////////////////////////////////////////////////////////////////////////////////////////
//?-----------do while--------
let contador = 0
do {
    console.log('Vuelta numero ' + contador)
    contador ++
}
while (contador <= 10)

//? DO while se ejecuta almenos UNA vez----
