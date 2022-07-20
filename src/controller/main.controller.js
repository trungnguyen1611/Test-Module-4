const StaffModel=require('../model/schema/staff.schema')
const BranchModel=require('../model/schema/branch.schema')

class MainController{
    constructor() {
    }

    async loadHomePage(req,res){
        const staffs=await StaffModel.find()
        return res.render('index',{staffs:staffs})
    }

    async loadDetailStaff(req,res){
        const staff=await StaffModel.findOne({_id:req.query.id})
        return res.render('staff_detail',{staff:staff})
    }

    async sortStaffAge(req,res){
        const staffs=await StaffModel.find().sort('age')
        return res.render('index',{staffs:staffs})
    }

    async loadAddBranch(req,res){
        return res.render('branch_create')
    }

    async addBranch(req,res){
        const branch=new BranchModel(req.body)
        await branch.save();
    }

}

module.exports=MainController;