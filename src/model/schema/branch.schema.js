const mongoose=require('mongoose');

const branchSchema= new mongoose.Schema({
    name:{
        type:String,
        ref:'staff'
    }
})

const BranchModel=mongoose.model('branch',branchSchema)

module.exports=BranchModel;