const UsuarioRepositoryArray = require("../repositories/usuario-repo-array");
const UsuarioRepositoryMongo = require("../repositories/usuario-repo-mongo");

class UsuarioService{
   
    constructor(){
        this.usuarioRepository = new UsuarioRepositoryMongo;              
    }

    adicionar(usuario){
        this.usuarioRepository.adicionar(usuario)
    }

    alterar(usuario){
        this.usuarioRepository.alterar(usuario) 
    }

    excluir(email){
       this.usuarioRepository.excluir(email) 
    }

    buscar( ){
        this.usuarioRepository.buscar(usuario)
    }

    buscarTodos(){
       return this.usuarioRepository.buscarTodos();
    }
}

module.exports = UsuarioService