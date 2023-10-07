const Course = require('../models/Course');
const Category = require('../models/category');

class CoupleController {
    async couple ( req, res, next) {
        const {brand,price} = req.query;
        const categoryData = await Category.findOne({category_name:'couple'});
        const query = {categoryId: categoryData._id};
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
        const array_couple = await Course.find(query).sort(sort).limit(4).populate('categoryId').lean();
        // console.log('array_couple', array_couple);
        return res.render('couple', {couplelist:array_couple});
    }

    async listCouple(req, res, next){
        // const  courses = await Course.find({}).populate('categoryId').lean();
        const coupleCategory = await Category.findOne({ category_name: "couple" })
        // console.log(courses)
        return res.render('update', {coupleCategory :coupleCategory})
    }

    async updateCourse(req, res, next){
        // res.json(req.body);
        Course.updateOne({_id: req.params.id}, req.body)
            .then (() => res.redirect('/courses/list'))
            .catch (next)
    }
}

module.exports = new CoupleController;