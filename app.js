const Server = require("./server")
const ManageDB  = require("./db/manageDB")


class App{

    start(){
        ManageDB.connect();
        
        new Server();          
    }

}

new App().start()


