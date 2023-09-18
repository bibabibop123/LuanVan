const Course = require('../models/Course');

class FemaleController {
    async female ( req, res, next) {
        const query = {category_name:"female"};
        const {brand,price} = req.query;
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
        const array_female = await Course.find(query).sort(sort).limit(40).lean();
        // console.log('array_female',array_female.length)
        return res.render('female', {femaleList:array_female});
    }
}

module.exports = new FemaleController;