const express = require('express');
const router = express.Router();
const controller = require('../controller/somaController')

router.get('/:soma', controller.soma);

module.exports = router;