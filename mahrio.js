process.env.NODE_URL = '10.10.47.200';
process.env.NODE_PUBLIC_PATH = './';

require('mahrio').runServer(process.env, __dirname).then(function (server) {
  var io = require('socket.io').listen(server.listener);

  var state = 1;
  setInterval(function () {
    io.sockets.emit('blink:led', state = !state);
  }, 3000);

  server.route({
    method: 'GET',
    path: '/',
    handler: function(req, rep){
      rep({running: true});
    }
  })
});
