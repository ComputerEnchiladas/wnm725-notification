process.env.NODE_URL = '10.10.47.200';
process.env.NODE_PUBLIC_PATH = './';
process.env.NODE_ENV = "development";

require('mahrio').runServer(process.env, __dirname).then(function (server) {
  var io = require('socket.io').listen(server.listener);

  var state = 1;
  setTimeout(function () {
    io.sockets.emit('blink:led', true);
  }, 5000);

  server.route({
    method: 'GET',
    path: '/',
    handler: function(req, rep){
      rep({running: true});
    }
  });

  server.route({
    method: 'POST',
    path: '/reply',
    handler: function(req, rep){
      console.log('MOBILE APP REPLIED');
      rep({ok: true});
    },
    config: {
      cors: true
    }
  })

});
