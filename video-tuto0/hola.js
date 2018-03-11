// Cómo leer un archivo con nodeJs.
//El objeto fs:    https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback

/* Hay dos formas de leer un archivo, de forma síncrona y asíncrona.
ASINCRONA:
fs.readFile('/etc/passwd', (err, data) => {
  if (err) throw err;
  console.log(data);
});

SINCRONA:
// macOS, Linux, and Windows
fs.readFileSync('<directory>');
// => [Error: EISDIR: illegal operation on a directory, read <directory>]

//  FreeBSD
fs.readFileSync('<directory>'); // => null, <data>

*/

/*  1. Montamos un server desde el que servir el archivo.
    2. Declaramos la variable htmlDoc donde guardaremos la lectura del archivo index.html
    3. Renderizamos la info del archivo.
Esto se puede hacer de dos formas: Síncrona y asíncrona.
*/

// ====== Forma síncrona ======

var http = require("http"),
    fs = require("fs"); // Módulo que se encarga de comunicarse con el sistema de archivos de la computadora.
var htmlDoc = fs.readFileSync('./index.html')  // Metemos en una variable lo que nos devuelve la lectura del archivo

    http.createServer(function(req, res){
       res.write(htmlDoc); // Escribe el archivo en el navegador
       res.end(); //Termina la conexión

    }, 3000);

// ====== Forma Asíncrona ======
/*

var http = require("http"),
    fs = require('fs');

fs. readFile('./index.html', function(error, html){
    // para q no de errores, se crea el servidor una vez q se haya leído el html y sólo entonces, por ello es por lo que
    // se hace aki el server y no fuera, Se realiza en el callback

    http.createServer(function(req, res){
        res.write(html);
        res.end();
    }, 3000)
})
*/
