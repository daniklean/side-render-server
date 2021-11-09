const express = require('express')
const router = express.Router()

const recetaController = require('../controllers/recetaController')

router.get('/', recetaController.homepage);

module.exports = router