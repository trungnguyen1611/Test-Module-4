const mongoose=require('mongoose');

const staffSchema= new mongoose.Schema({
    name:String,
    code:{
        type:Number,
        unique:true
    },
    age:Number,
    branch:{
        type:String,
        ref:'branch'
    }
})

const StaffModel=mongoose.model('staff',staffSchema)

module.exports=StaffModel;