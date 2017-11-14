var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('client'));

var fs = require('fs');
var awk = require('awk');
var archivo = __dirname + '/db/escuelas.csv';

function resultado(va){
  var sc = 'BEGIN {FS=","} /'+ va +'/ { print $9 $10 } END {print NR}';
  var data = fs.readFileSync(archivo);
  var result = awk(sc, data);
  //console.log(result.exit_code); // imprime cero, ni idea qu ess
  console.log(result.stdout);
  //console.log(result.stderr);
}

io.on('connection', function(socket){
  console.log('Alguien se ha conectado con socket');

  socket.on('consultaN', function(data){
    socket.emit('busqueda', resultado(data))
  });
});

server.listen(8080,function(){
  console.log("Servidor corriendo en el puerto 8080...")
});
