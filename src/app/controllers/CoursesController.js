const Course = require('../models/Course');
const Category = require('../models/category');

class CoursesController {
    async male ( req, res, next) {
        const {brand,price} = req.query;
       
        const categoryData = await Category.findOne({category_name:'male'});
        const query = {categoryId: categoryData._id};
        if(brand && brand.length >0){
            query['brand']=brand;
        }
        const sort = {};
        if(price){
            if(price=='asc'){
                sort['total']= 1;
            }
            else sort['total']= -1;
            
        }
        // console.log('sort', sort);
        const array_male = await Course.find(query).sort(sort).limit(50).populate('categoryId').lean();
    // console.log('array_male',array_male);
        return res.render('courses', {male:array_male});
    }
    
    // async listCourse(req, res, next){
    //     // const  courses = await Course.find({}).populate('categoryId').lean();
    //     const maleCategory = await Category.findOne({ category_name: "male" })
    //     // console.log(courses)
    //     return res.render('update', {maleCategory :maleCategory})
    // }

    async updateCourse(req, res, next){
        // res.json(req.body);
        Course.updateOne({_id: req.params.id}, req.body)
            .then (() => res.redirect('/courses/list'))
            .catch (next)
    }

}

module.exports = new CoursesController;