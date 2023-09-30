const Course = require('../models/Course');
const Category = require('../models/category');

class CoursesController {
    async male ( req, res, next) {
        const {brand,price} = req.query;
        const query = {category_name:"male"};
        
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
        const maleCategory = await Category.findOne({ category_name: "male" })
        const array_male = await Course.find({categoryId: maleCategory._id}).sort(sort).limit(50).populate('categoryId').lean();
    // console.log('array_male',array_male);
        return res.render('courses', {male:array_male});
    }
    
    async listCourse(req, res, next){
        // const  courses = await Course.find({}).populate('categoryId').lean();
        const maleCategory = await Category.findOne({ category_name: "male" })
        // console.log(courses)
        return res.render('update', {maleCategory :maleCategory})
    }

    async updateCourse(req, res, next){
        // res.json(req.body);
        Course.updateOne({_id: req.params.id}, req.body)
            .then (() => res.redirect('/courses/list'))
            .catch (next)
    }

    // async detailCourses(req, res, next){
    //     const  courses = await Course.findById(req.params.id).lean();
    //     // console.log(courses)
    //     return res.render('edit', {courses :courses})
    // }

    // async deleteCourse(req, res, next){
    //     console.log('req',req.body);
    //     Course.deleteOne({_id: req.params.id})
    //         .then (() => res.redirect('back'))
    //         .catch (next)
    // }
}

module.exports = new CoursesController;