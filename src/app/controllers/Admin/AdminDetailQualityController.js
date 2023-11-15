const Course = require('../../models/Course');

class AdminDetailQualityController {
    async adminDetailQuality ( req, res, next) {
        return res.render('admin/detailQuality',{layout:'admin'});
    }
}

module.exports = new AdminDetailQualityController;