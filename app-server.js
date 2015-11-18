var express = require('express'),
    app = express(),
    port = 3000;

app.use(express.static('./public'));
app.use(express.static('./settings'));
app.use(express.static('./node_modules/bootstrap/dist'));

var server = app.listen(port);
var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
  console.log("Connected %s", socket.id);
});
console.log('Polling server is running on http://localhost:' + port);
