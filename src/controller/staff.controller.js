const StaffModel=require('../model/schema/staff.schema')

class StaffController{
    constructor() {
    }

    async loadAddPage(req,res){
        return res.render('staff_create')
    }

    async addStaff(req,res){
        const staff=new StaffModel(req.body);
        await staff.save();
        return res.redirect('/')
    }

    async loadEditPage(req,res){
        const staff=await StaffModel.findOne({_id:req.query.id})
        return res.render('staff_edit',{staff:staff})
    }

    async editStaff(req,res){
        await StaffModel.updateOne({_id:req.query.id},{
            name:req.body.name,
            code:req.body.code,
            age:req.body.age,
            branch:req.body.branch,
        })
        return res.redirect('/')
    }

    async deleteStaff(req,res){
        await StaffModel.findOneAndDelete({_id:req.query.id})
        return res.redirect('/')
    }
}

module.exports=StaffController;