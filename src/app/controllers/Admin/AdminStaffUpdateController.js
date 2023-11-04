const Course = require('../../models/Course');

class AdminStaffUpdateController {
    async adminStaffUpdate ( req, res, next) {
        return res.render('admin/staffUpdate',{layout:'admin'});
    }
}

module.exports = new AdminStaffUpdateController;