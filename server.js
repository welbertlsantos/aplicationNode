'use strict'
const app = require('./src/app');
const http = require('http');

const port = 8080;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);
console.log('Api Rodando da porta ' + port);

