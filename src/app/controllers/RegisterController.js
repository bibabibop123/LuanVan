const userModel = require('../models/user');
const address = require('../models/addressUser');
const city = require('../../raw.githubusercontent.com_kenzouno1_DiaGioiHanhChinhVN_master_data.json_fbclid=IwAR2C1lNSPtkItOSeMoDlQpfr61OA_CmBcXo3t54WW_lQNNDylh5ZUOhO9Mc.json')

class RegisterController {
    async register ( req, res, next) {
        // console.log(res.locals.message);
        // const nameCity = city.find((item)=>item.Id ==req.body.city);
        // const nameDistrict = nameCity.Districts.find((item)=>item.Id == req.body.district);
        // const nameWard = nameDistrict.Wards.find((item)=>item.Id ==req.body.ward);
        // let listAddress = await address.find({userId: req.user._id}).lean();
        // listAddress = listAddress.map((address) =>{
        //     return {
        //         ...address,
        //         cityName: listCityData().find((item)=>item.Id == address.City)?.Name,
        //         districtName : listDistrictData().find((item)=>item.Id == address.district)?.Name,
        //         wardName: listWardsData().find((item)=>item.Id == address.ward)?.Name,

        //     }
        // })
        res.render('register');
    }

    async registerAction(req,res,next){
        const {email} = req.body ;
        const userExist = await userModel.findOne({email});
        if(userExist){
            req.flash('message', 'Người dùng đã tồn tại')
            return res.redirect('/register');
        }
            let userId = await userModel.create({...req.body});
            const nameCity = city.find((item)=>item.Id ==req.body.city);
            const nameDistrict = nameCity.Districts.find((item)=>item.Id == req.body.district);
            const nameWard = nameDistrict.Wards.find((item)=>item.Id ==req.body.ward);
            await address.create ({
                userId:userId._id,
                City:nameCity.Id,
                nameCity:nameCity.Name,
                district:nameDistrict.Id,
                nameDistrict:nameDistrict.Name,
                ward:nameWard.Id,
                nameWard:nameWard.Name,
                road:req.body.road,
            }); 
        // console.log('register', userId);
        req.flash('message', 'Đăng ký thành công !!!')
        res.redirect('/login');
    }
}

module.exports = new RegisterController;