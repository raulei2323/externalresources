const http = require("http");
const cursos = require("./cursos");

const servidor = http.createServer((req, res) => {
  const metodo = req.method

  switch(metodo){
    case 'GET':
      return manejarSolicitudGET(req, res)
      case 'POST':
        return manejarSolicitudPOST(req, res)
      default:
        res.statusCode = 501
      console.log(`El metodo usado no puede ser manejado por el servidor: ${metodo}`)
  }
  
});
function manejarSolicitudGET(req, res) {
  const path = req.url

  console.log(res.statusCode)

  if(path === '/'){
    //!recordar que  res.statuscode = 200 se asigna por defecto asi que no hay necesidad de escribirlopero estaria aqui
    res.statusCode = 200
    res.writeHead(200, {'Content-Type': 'aplication/json'})
    return res.end('Bienvenidos a mi primer servidor y API creado con node.js')
  }else if (path === '/api/cursos'){//!se puede inicar asitodos los path la api, como convencion
    return res.end(JSON.stringify(cursos.infoCursos))
  }else if (path === '/api/cursos/programacion'){//!path inicia con convencion /api, lo cuale es opcional
    return res.end(JSON.stringify(cursos.infoCursos.programacion))

  }else if (path === '/cursos/matematicas'){
    return res.end(JSON.stringify(cursos.infoCursos.matematicas))
  }
  res.statusCode = 404
  res.end('El recurso solicitado no existe')
}

function manejarSolicitudPOST (req, res){
  const path = req.url

  if (path === '/cursos/programacion'){

    let cuerpo = ''

    req.on('data', contenido => {
      cuerpo += contenido.toString()
    })
    req.on('end', () => {
      console.log(cuerpo)
      console.log(typeof cuerpo)
      return res.end('El servidor recibio una solicitud POST para /cursos/programcion')
    })
    //return res.end('El servidor recibio una solicitud POST para /cursos/programcion')
  }
}

const PUERTO = 3000;

servidor.listen(PUERTO, () => {
  console.log(`el servidor esta escuchando en el puerto ${PUERTO}`);
});
