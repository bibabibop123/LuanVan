const Course = require('../../models/Course');
const Order = require('../../models/Order');
const User = require('../../models/user');
const comment = require('../../models/comment');
const address = require('../../models/addressUser');
const { PaymentStatus } = require('../../../config/enum.config');
const city = require('../../../raw.githubusercontent.com_kenzouno1_DiaGioiHanhChinhVN_master_data.json_fbclid=IwAR2C1lNSPtkItOSeMoDlQpfr61OA_CmBcXo3t54WW_lQNNDylh5ZUOhO9Mc.json')

class AdminCmtController {
    async adminCmt ( req, res, next) {

        const {keyword} = req.query;
        const query = {};
        if (keyword) {
            query['username']= {$regex: keyword, $options: 'i'}
            
        }
        const cmt = await comment.find(query).sort({ createdAt: -1 }).lean().populate('productId');
        // console.log(cmt)
        
     

        return res.render('admin/cmtAdmin',{layout:'admin',cmt:cmt});
    }

    async deleteCmt(req, res, next){
        // xu ly logic o day
        await comment.findByIdAndDelete(req.params.id,req.body);
        res.redirect('/admin/cmtAdmin')
    }
}

module.exports = new AdminCmtController;