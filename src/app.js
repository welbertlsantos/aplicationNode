const express = require('express');
const app = express();
const routerIndex = require('./router/index-router');

app.use('/', routerIndex);

module.exports = app;
