const UsuarioService = require("../services/usuario-service")
const Usuario = require("../domain/usuario-domain")

class UsuarioController{
    constructor(){
        this.usuarioService =  new UsuarioService() 
    }

    async adicionar(req, res){
        let usuario =  new Usuario(req.body.email, req.body.nome, req.body.senha) 
        this.usuarioService.adicionar(usuario)
        res.json(usuario)
    }

    async alterar(req, res){
        //let usuario =  {email: req.body.email, nome: req.body.nome, senha: req.body.senha} 
        await this.usuarioService.alterar(req.body)
        res.send("Atualizado com sucesso! ")
    }

    async excluir(req, res){
        await  this.usuarioService.excluir(req.body.email)
        res.send("Excluido com sucesso!")
    }
    
    async buscarTodos(req, res){
        const usuarios = await this.usuarioService.buscarTodos();  
        res.json(usuarios)        
    }   
}

module.exports = UsuarioController