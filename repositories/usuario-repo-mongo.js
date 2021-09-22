const mongoose = require('mongoose')
const UsuarioModel = require("../model/usuario-model")

class UsuarioRepositoryMongo{
   
    constructor(){
        this.model = UsuarioModel
    }

    adicionar(usuario){
        this.model.create(usuario, function(err, suc){
            if(err) return handleError(err)
            console.log("Usuário salvo com sucesso")
        })
    }

    alterar(usuario){
        const query = {email: usuario.email}; 
        this.model.findOneAndUpdate(query, usuario).exec()        
    }

    excluir(email){
        this.model.deleteOne({ email: email }, function (err) {
            if (err) return handleError(err);            
        }); 
    }

    buscar(id){
       
    }

    buscarTodos(){
       var query = this.model.find({}); 
       var promise = query.lean().exec();
       return promise;
       
    }
}

module.exports = UsuarioRepositoryMongo