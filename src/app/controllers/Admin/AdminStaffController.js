const Course = require('../../models/Course');
const { PaymentStatus } = require('../../../config/enum.config');
const Order = require('../../models/Order');
const staff = require('../../models/staff');
const role = require('../../models/role');

class AdminStaffController {
    async adminStaff ( req, res, next) {
        // const orders = await Order.find({status:PaymentStatus.dang_van_chuyen}).sort({ createdAt: -1 }).lean();
        const staffData = await staff.find({staff: "Nhân viên"}).populate('roleId').sort({ createdAt: -1 }).lean();
        const staffNhanVien = staffData.filter(staff => staff.staffPosition === "Nhân viên");
        // console.log('nhân viên',staffNhanVien)
        return res.render('admin/staffAdmin',{staffNhanVien,layout:'admin'});
    }

    async updateStaff (req, res, next) {
        console.log(req.body);

        await staff.findByIdAndUpdate(req.params.id,req.body);

        return res.redirect('/admin/staffAdmin');
    }

    async detailStaff(req, res, next){
        const staffData = await staff.findById(req.params.id).populate('roleId').lean();
        const roleData = await role.find({roleId: role._id}).lean();
        // console.log('detail', roleData)

        return res.render('admin/staffUpdate', {staffData:staffData, roleData:roleData, layout:'admin'})
    }

    async deleteStaff(req, res, next){
        // xu ly logic o day
        // console.log('id',req.params.id);
        // console.log('alo')
        await staff.findByIdAndDelete(req.params.id);
        res.redirect('back')
    }
}

module.exports = new AdminStaffController;