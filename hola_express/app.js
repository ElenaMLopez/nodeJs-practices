var express = require('express');

var app = express(); // ejecuta express. Retorna un objeto.
app.get('/', function(req, res){
  res.send('Cucú desde express'); // send() es particular de express, manda
                                // la petición y la cierra, no hace falta end().
})

app.listen(3000);
