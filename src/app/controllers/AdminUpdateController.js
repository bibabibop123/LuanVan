const Course = require('../models/Course');

class AdminUpdateController {
    async adminCreate ( req, res, next) {
        return res.render('admin/update-admin',{layout:'admin'});
    }
}

module.exports = new AdminUpdateController;