'use strict'

const http = require('http');
const express = require('express');

const app = express();
const port = 8080;
app.set('port', port);

const server = http.createServer(app);
const router = express.Router();

const route = router.get('/', (req, res, next) => {
    res.status(200).send ({
        Título: "AplicationNode",
        Version: "1.0.0 - beta"
        });
});

app.use('/', route);

server.listen(port);
console.log('Api Rodando da porta ' + port);