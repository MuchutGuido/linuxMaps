var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('client'));

var fs = require('fs');
var awk = require('awk');
//var shell = require('shelljs')
var archivo = __dirname + '/db/escuelas.csv';
//var cp = require('child_process');

function resultado(va){
  var sc = 'END {print NR}';//'BEGIN {FS=","} /'+ va +'/ { print $9 }';
  var data = fs.readFileSync(archivo);
  var result = awk(sc, data);
  var spawn = require('child_process').spawn;
var child = spawn ('node', ['script.js']);
// child.stdout.emit('data',result);
//child.logger.verbose('tail output: ' + JSON.stringify(result).toString());
var pe =JSON.stringify(result).toString();
// on('data',
//     function (data) {
//       console.log("vamos");
//
//     }
console.log(pe);  //);
  //console.log(result.exit_code); // imprime cero, ni idea qu ess
return result.stdout
  // var command = "awk 'END {print NR}'"+ data
  // cp.exec(command);
  //console.log(result.stdout);
  //fs.writeFileSync('pepe.html', pe);
  //console.log(result.stderr);
  //return sys.print(result.stdout);

  // cp.exec(command, function(exit_code, stdout, stderr){
  //    sys.print('stdout: ' + stdout);
  //    sys.print('stderr: ' + stderr);
  //        if(exit_code !== null) {
  //            console.log('EXECUTION ERROR: ' , exit_code);
  //        }
  //      });
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
