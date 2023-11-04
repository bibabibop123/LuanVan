const staff = require('../../models/staff');
const role = require('../../models/role');

class AdminCreateStaffController {
    async adminCreateStaff ( req, res, next) {
        const roleData = await role.find().lean();

        return res.render('admin/createStaff', {layout:'admin', roleData:roleData});
    }

    async adminPost (req, res, next) {

        // console.log(req.body);

        await staff.create({
            staffName: req.body.staffName,
            staffEmail: req.body.staffEmail,
            staffPassword: req.body.staffPassword,
            staffPhone: req.body.staffPhone,
            staffSex: req.body.staffSex,
            staffAddress: req.body.staffAddress,
            staffPosition: req.body.staffPosition,
            roleId: req.body.roleId,
        })

        return res.redirect('/admin/staffAdmin');
    }
}

module.exports = new AdminCreateStaffController;