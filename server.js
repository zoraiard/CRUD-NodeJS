const express = require('express')
const UsuarioRoute  = require("./routes/usuario-route")

class Server{
 
  constructor(){
    this.app = express()
    this.port = process.env.PORT || '3000';     
    this.usuarioRoute = new UsuarioRoute()
    this.start()
  }

  start(){
    this.app.use(express.json())
    this.app.use( this.usuarioRoute.router) 

    this.app.listen(this.port, () => {
      console.log(`App listening at http://localhost:${this.port}`)
    })
  }
}

module.exports = Server




/* -> npm run start 
   -> https://mongoosejs.com/docs/api.html
   -> https://mongoosejs.com/docs/queries.html
   -> https://mongoosejs.com/docs/api.html#model_Model.find
   
*/