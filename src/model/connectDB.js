const mongoose=require('mongoose');


class ConnectDB{
    static connect(){
        return mongoose.default.connect('mongodb+srv://nqtrung:161198@cluster0.sm5v0ui.mongodb.net/?retryWrites=true&w=majority')
            .then(()=>{
                console.log('Database connected')
            })
            .catch((err)=>{
                console.log('Database connected error',err.message)
            })
    }
}

module.exports=ConnectDB;