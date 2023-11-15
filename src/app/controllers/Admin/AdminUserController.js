const Course = require('../../models/Course');
const Order = require('../../models/Order');
const User = require('../../models/user');
const address = require('../../models/addressUser');
const { PaymentStatus } = require('../../../config/enum.config');
const city = require('../../../raw.githubusercontent.com_kenzouno1_DiaGioiHanhChinhVN_master_data.json_fbclid=IwAR2C1lNSPtkItOSeMoDlQpfr61OA_CmBcXo3t54WW_lQNNDylh5ZUOhO9Mc.json')



class AdminUserController {
    async adminUser ( req, res, next) {

        const {keyword} = req.query;
        const query = {};
        if (keyword) {
            query.$or = [
                { firstName: { $regex: keyword, $options: 'i' } },
                { lastName: { $regex: keyword, $options: 'i' } }
            ];
        }
        
        const userData = await User.find(query).sort({ createdAt: -1 }).lean();

        const orderData = await Promise.all(userData.map(async(user)=>{
            let total = 0;
            let totalNumber = 0;
            const listOrder = await Order.find({user: user._id, status:PaymentStatus.hoan_thanh}).lean();
            listOrder.forEach((user)=>{total += 1});
            listOrder.forEach((user)=>{totalNumber += user.total});

            return {...user,userOrder: total, totalNumber: totalNumber}
        }))

        // console.log(orderData);
        return res.render('admin/userAdmin',{layout:'admin', userData:orderData});
    }
}

module.exports = new AdminUserController;