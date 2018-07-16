const BSON =  require('bson');
var net = require('net');

var server = net.createServer(function(sock) {
  sock.on('data', function(data) {
    console.log('DATA ' + sock.remoteAddress + ': ' + data);
      // Write the data back to the socket, the client will receive it as data from the server
      sock.write('You said "' + data + '"');
  });
});

server.listen(7000, '127.0.0.1');
