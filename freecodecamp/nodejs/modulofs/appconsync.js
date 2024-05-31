const fs = require('fs');

console.log('Antes de leer el archivo')
//?leer el contenido de un archivo
const archivo =fs.readFileSync('index.html', 'utf-8');
console.log(archivo)
console.log('Despues de leer el archivo')

//?renombrar un archivo 
fs.renameSync('index.html', 'main.html')
console.log('Despues de renombrar el archivo')

//?agregar contenido al final de un archivo
fs.appendFileSync('main.html', '<p>Hola</p>')
console.log('Despues de agregar contenido al archivo')

//?Reemplazar todo el contenido del archivo
fs.writeFileSync('indextonewcontent.html', 'Contenido nuevo')
console.log('Despues de reemplazar todo el contenido de index.html')

//? Eliminar archivos
//*Crear primero un archivo para eliminar, para asi evitar eliminar el index.html
fs.unlinkSync('newfile.html')
console.log('Despues de borrar el newfile.html')


