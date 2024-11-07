const express = require('express');
const router = express.Router();
const compradorController = require('../controllers/compradorController')

// Ruta Registro
router.get('/registro', compradorController.getRegistroForm);
router.post('/registro', compradorController.registerUser);

// Ruta Login
router.get('/login', compradorController.getLoginForm);
router.post('/login', compradorController.loginUser);

//ruta vista comprador
router.get('/comprador', compradorController.viewComprador);

module.exports = router;