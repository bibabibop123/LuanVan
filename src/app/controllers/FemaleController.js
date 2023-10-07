const Course = require('../models/Course');
const Category = require('../models/category');

class FemaleController {
    async female ( req, res, next) {
        const categoryData = await Category.findOne({category_name:'female'});
        const query = {categoryId: categoryData._id};
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

        const array_female = await Course.find(query).sort(sort).limit(50).populate('categoryId').lean();
        // console.log('array_female',array_female.length)
        return res.render('female', {femaleList:array_female});
    }

    async listFeCourse(req, res, next){
        // const  courses = await Course.find({}).populate('categoryId').lean();
        const femaleCategory = await Category.findOne({ category_name: "female" })
        // console.log(courses)
        return res.render('update', {femaleCategory :femaleCategory})
    }

    async updateCourse(req, res, next){
        // res.json(req.body);
        Course.updateOne({_id: req.params.id}, req.body)
            .then (() => res.redirect('/courses/list'))
            .catch (next)
    }
}

module.exports = new FemaleController;