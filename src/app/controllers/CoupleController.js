const Course = require('../models/Course');
const Category = require('../models/category');

class CoupleController {
    async couple ( req, res, next) {
        const {brand,price} = req.query;
        const query = {};
        const sort = {};
        if(price){
            if(price=='asc'){
                sort['total']= 1;
            }
            else sort['total']= -1;
            
        }
        if(brand && brand.length >0){
            query['brand']=brand;
        }
        const coupleCategory = await Category.findOne({ category_name: "couple" })
        const array_couple = await Course.find({categoryId:coupleCategory._id}).limit(4).populate('categoryId').lean();
        // console.log('array_couple', array_couple);
        return res.render('couple', {couplelist:array_couple});
    }
}

module.exports = new CoupleController;