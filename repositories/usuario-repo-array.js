class UsuarioRepositoryArray{
   
    constructor(){
        this.usuarios = []              
    }

    adicionar(usuario){
        this.usuarios.push(usuario)
    }

    alterar(usuario){
        this.usuarios.forEach( (element) => {
            if (element.email == usuario.email){
                element.senha = usuario.senha
                element.nome = usuario.nome
            }
        });
    }

    excluir(email){
       let i = this.usuarios.findIndex((item)=>item.email == email)
       this.usuarios.splice(i,1) 
    }

    buscar(id){
        this.usuario.push(usuario)
    }

    buscarTodos(){
       return this.usuarios;
    }
}

module.exports = UsuarioRepositoryArray