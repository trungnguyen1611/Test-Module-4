const router = require('express').Router();
const MainController = require('../controller/main.controller')
const controller = new MainController();


router.route('/')
    .get(controller.loadHomePage)

router.route('/detail')
    .get(controller.loadDetailStaff)

router.route('/sort')
    .get(controller.sortStaffAge)

router.route('/branch')
    .get(controller.loadAddBranch)
    .post(controller.addBranch)


module.exports = router;