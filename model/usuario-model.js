const mongoose = require('mongoose')
const Usuario = require('../domain/usuario-domain')

const UsuarioSchema = mongoose.Schema(
    { 
        nome:String, 
        email:String, 
        senha:String 
    }
);
UsuarioSchema.loadClass(Usuario)
module.exports = mongoose.model('Usuario', UsuarioSchema);