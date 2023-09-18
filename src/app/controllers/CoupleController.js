const Course = require('../models/Course');

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
        const array_couple = await Course.find({category_name:"couple",...query}).sort(sort).limit(10).lean();
        return res.render('couple', {couplelist:array_couple});
    }
}

module.exports = new CoupleController;