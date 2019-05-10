const express = require('express');
const app = express();
const router = express.Router();

const route = router.get('/:valor', (req, res, next) => {
    
    let valor1 = req.query.valor1;
    let valor2 = req.query.valor2;
    let soma = parseInt(valor1) + parseInt(valor2);

    res.status(200).send ({soma: soma });
});

app.use('/', route);

module.exports = app;
