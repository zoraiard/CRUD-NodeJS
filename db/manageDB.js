const mongoose = require('mongoose')

class ManageDB{
 
    static async connect(){

        await mongoose.connect("mongodb+srv://zoraia:zoraia1@cluster0.vnfed.mongodb.net/notesDB?retryWrites=true&w=majority",  
        { useNewUrlParser: true }, { useUnifiedTopology: true }).catch((err)=>{
            console.log(`connection error ${err}`)
        });
        
        console.log('Connected mongodb'); 
        
    }

    static async close(){
        await mongoose.connection.close().catch((err)=>{
            console.log(`error closing ${err}`)
        });

        console.log('DB successfully closed'); 

    }
}

module.exports = ManageDB