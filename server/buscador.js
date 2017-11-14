var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('client'));

io.on('connection', function(socket){
  console.log('Alguien se ha conectado con socket');
  socket.emit('busqueda', {
    id: 1,
    text: "Hola soy un mensaje",
    author: "Muchut Guido"
  })
});

server.listen(8080,function(){
  console.log("Servidor corriendo en el puerto 8080...")
});
