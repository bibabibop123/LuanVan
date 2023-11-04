const Course = require('../models/Course');
const User = require('./../models/user');
const address = require('../models/addressUser');
const city = require('../../raw.githubusercontent.com_kenzouno1_DiaGioiHanhChinhVN_master_data.json_fbclid=IwAR2C1lNSPtkItOSeMoDlQpfr61OA_CmBcXo3t54WW_lQNNDylh5ZUOhO9Mc.json')

class UserController {
    async user ( req, res, next) {
        const user = await User.findById(req.user._id).populate('addressId').lean();
        let listAddress = await address.find({userId: req.user._id}).lean();
        // console.log('listAddress', listAddress);
        // listAddress = listAddress.map((address) =>{
        //     return {
        //         ...address,
        //         cityName: listCityData().find((item)=>item.Id == address.City)?.Name,
        //         districtName : listDistrictData().find((item)=>item.Id == address.district)?.Name,
        //         wardName: listWardsData().find((item)=>item.Id == address.ward)?.Name,

        //     }
        // })
        return res.render('user',{userInfo:user, listAddress:listAddress});
    }
    async updateUser(req,res,next){
        await User.findByIdAndUpdate(req.user._id,{...req.body});
        req.flash('message', 'Cập nhật thành công !!!');
        return res.redirect('/user');
    }
}

module.exports = new UserController;