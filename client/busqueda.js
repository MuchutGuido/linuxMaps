var socket = io.connect('http://localhost:8080', {'forceNew': true});
var pepe;
socket.on('busqueda', function(data){
  pepe = data;
  return document.getElementById('busqueda').innerHTML = data;
});

function consulta(e) {
  var mensaje = document.getElementById('texto').value
  //envia por el socket con el mensaje new-message para que lo escuche el servidor
  socket.emit('consultaN', mensaje)
  //document.getElementById('texto').value = ''; // limpia la casilla input
  return false;
}
