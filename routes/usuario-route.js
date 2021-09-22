const express = require('express')
const UsuarioController = require("../controllers/usuario-controller")

class UsuarioRoute{

  constructor(){
    this.usuarioController = new UsuarioController()
    this.router = express.Router()
    this.loadRoutes()
  }

  loadRoutes(){
    this.router.get('/', (req, res) => {
      res.send('Hello World!')
    })
    
    this.router.get('/usuarios', (req, res) => {
      this.usuarioController.buscarTodos(req, res);    
    }) 
    
    this.router.post('/usuario',(req, res) => {
      this.usuarioController.adicionar(req, res);    
    })
    
    this.router.put('/usuario', (req, res) => {
      this.usuarioController.alterar(req, res);    
    })
    
    this.router.delete('/usuario/', (req, res) => {
      this.usuarioController.excluir(req, res)
    })
    
  }
}

module.exports = UsuarioRoute
