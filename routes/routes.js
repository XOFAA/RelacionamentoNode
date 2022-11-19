const express = require('express')
const PessoasController = require('../controllers/PessoasController')
const routes = express.Router()

routes.get('/', PessoasController.index)
routes.get('/show/:id', PessoasController.show)
routes.get('/atualizar/:id', PessoasController.update)
routes.get('/deletar/:id', PessoasController.deletar)
routes.post('/cadastrar', PessoasController.cadastro)

module.exports = routes