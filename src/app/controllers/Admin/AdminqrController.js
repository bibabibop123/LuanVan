const Course = require('../../models/Course');
const Order = require('../../models/Order');
const User = require('../../models/user');
const address = require('../../models/addressUser');
const { PaymentStatus } = require('../../../config/enum.config');
const city = require('../../../raw.githubusercontent.com_kenzouno1_DiaGioiHanhChinhVN_master_data.json_fbclid=IwAR2C1lNSPtkItOSeMoDlQpfr61OA_CmBcXo3t54WW_lQNNDylh5ZUOhO9Mc.json')

class AdminQrController {
    async adminQr ( req, res, next) {

        const {keyword} = req.query;
        const query = {status: PaymentStatus.thanh_toan_qr};
        if (keyword) {
            query['name']= {$regex: keyword, $options: 'i'}
            
        }
        
        const orders = await Order.find(query).sort({ createdAt: -1 }).lean();

        return res.render('admin/qrAdmin',{layout:'admin',orders:orders});
    }
}

module.exports = new AdminQrController;