const express = require('express');
const contaVisitasMiddleware = require('./middleware/contaVisitas.js');
const homeController = require('./controllers/homeController.js');
const usuarioController = require('./controllers/usuarioController.js');

const routes = express.Router();

routes.get('/', homeController.index);
routes.get('/teste', contaVisitasMiddleware, homeController.teste);
routes.get('/usuario/form', usuarioController.formulario);
routes.post('/usuario/form', usuarioController.salvar);
routes.get('/usuario/maior', usuarioController.maior);
routes.get('/usuario/menor', usuarioController.menor);

module.exports = routes;
