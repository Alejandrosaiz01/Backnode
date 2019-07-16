//cargar libreria  http

const http = require('http');
const Chance = require('chance');

const chance = new Chance();

//DEfinir un servidor

const server = http.createServer(function (reques, response) {
    //en cada peticion se ejecuta esto

    response.writeHead(200, { 'Content-Type': 'text/html; charter=UTF-8' });

    response.end('<h1> Wake up, Neo...</h1>\n');

});

//arancamos el servidor

server.listen(1337, '127.0.0.1');

//info en consola

console.log('servidor arrancado en 127.0.0.1:1337');