const router = require('express').Router();
const StaffController = require('../controller/staff.controller')
const controller = new StaffController();

router.route('/create')
    .get(controller.loadAddPage)
    .post(controller.addStaff)

router.route('/edit')
    .get(controller.loadEditPage)
    .post(controller.editStaff)

router.route('/delete')
    .get(controller.deleteStaff)


module.exports = router;