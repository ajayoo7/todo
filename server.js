'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: process.env.PORT || 3000 })

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});

server.register(require('inert'), (err) => {

    if (err) {
        throw err;
    }

    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            reply.file('./index.html');
        }
    });
});

server.register(require('inert'), (err) => {

    if (err) {
        throw err;
    }
server.route({
    method: 'GET',
    path: '/static/{filename}',
      handler: function (request, reply) {
        reply.file('./static/'+encodeURIComponent(request.params.filename));
    }
});
});
