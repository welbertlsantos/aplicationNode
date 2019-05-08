const express = require('express');
const app = express();

const indexrouter = require('./router/index-router');

app.use('/', indexrouter);

module.exports = app;
