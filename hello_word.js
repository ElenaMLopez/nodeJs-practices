// Para ejecutar poner node cosas en consola

setTimeout(function(){
    console.log('Hola futuro... ')}, 2000);
    console.log('Tenemos %d usuarios...', 10);
    console.log("Tenemos %j", {alumnos:{total:15, estado:"conectados"}});

// Hacer hello word desde node en c9:
  var http = require('http');

  var mensaje = 'Hola a todos, ahora usando HTTP con C9.io\n como te quedas???? Pues abre la consola y mira Netwok...';
 

  http.createServer(function(req, res) {
        var random = function(){
          return random= Math.floor(Math.random()*10);
        }
    // jugando con las cabeceras:

      res.writeHead(200, {'Content-Type': 'text/plain',
                        'date':'01-01-2000',
                        'Chupitexto':'Te has quedao crazy',
                        'Trailer': 'Content-MD5',
                        'El_Random': 'Actualiza y observa, porque cambio....' + random(),
      });
      res.addTrailers({ 'Content-MD5': '7895bf4b8828b55ceaf47747b4bca667' });
      res.writeContinue('huuuuuuuuuu');
      res.end(mensaje);

  }).listen(process.env.PORT, process.env.IP);

  console.log('Server running at http://'+process.env.IP+':'+process.env.PORT+'/');
  
/* SIN C9:
  var http = require('http'); //Importamos librería nativa para arrancar servidores locales

  var puerto = 3000; // Seleccionamos un puerto (8080 es el típico)
  var direccion = "127.0.0.1"; // seleccionamos una IP
  var mensaje = 'Hola a todos, ahora usando HTTP\n'; //Mensaje a escribir con el cierre de la conexión


  http.createServer(function (peticion, respuesta) {
    respuesta.writeHead(200, {'Content-Type': 'text/plain'});
    respuesta.end(mensaje);// Si no ponemos esto se queda recargando constantemente porque no se cierra la conexión!!!
  }).listen(puerto, direccion);
  console.log('Servidor funcionando en http://'+direccion+':'+puerto+'/');
  
  */
  

