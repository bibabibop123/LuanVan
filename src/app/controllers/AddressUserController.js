const Course = require('../models/Course');
const User = require('./../models/user');
const address = require('../models/addressUser');
const city = require('../../raw.githubusercontent.com_kenzouno1_DiaGioiHanhChinhVN_master_data.json_fbclid=IwAR2C1lNSPtkItOSeMoDlQpfr61OA_CmBcXo3t54WW_lQNNDylh5ZUOhO9Mc.json')

class AddressUserController {
    async addressUser ( req, res, next) {
        // const user = await User.findById(req.user._id).lean();
        // const vietnam = await city.find().lean();
        return res.render('addressUser');
    }

    async createAddress (req, res, next) {
        
        const user = await User.findById(req.user._id).lean();
        // const cityUser = await city.findById(req.body.id).lean();
        // await city.findById(req.).
        // console.log(req.body);
        //await city.findById(req.body.id);
        // console.log(cityData);
        // console.log(nameDistrict);
        // console.log(cityData.Name);
        // console.log(nameWard.Name);
        // console.log(nameDistrict.Name);

        // console.log('user', user)
        const nameCity = city.find((item)=>item.Id ==req.body.city);
        const nameDistrict = nameCity.Districts.find((item)=>item.Id == req.body.district);
        const nameWard = nameDistrict.Wards.find((item)=>item.Id ==req.body.ward);
        await address.create ({
            userId:req.user._id,
            City:nameCity.Id,
            nameCity:nameCity.Name,
            district:nameDistrict.Id,
            nameDistrict:nameDistrict.Name,
            ward:nameWard.Id,
            nameWard:nameWard.Name,
            road:req.body.road,
        });
        req.flash('message', 'Thêm địa chỉ mới thành công !!!');
        // await User.findByIdAndUpdate()
        return res.redirect('/');

    }
}

module.exports = new AddressUserController;