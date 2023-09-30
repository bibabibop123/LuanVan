const Course = require('../models/Course');

class AdminHomeController {
    async home ( req, res, next) {
        const products = await Course.find().lean();
        // console.log('products',products);
        return res.render('admin/home', {layout:'admin',products:products});
    }

    store(  req, res, next) {
        // res.json(req.body);
        const formdata = req.body;
        const course = new Course(formdata)
        course.save()
            .then(() =>res.redirect('/'))
            .catch(error => {})
    }

    async updateCourse(req, res, next){
        await Course.findByIdAndUpdate(req.params.id,req.body);
        res.redirect('/admin')
    }

    async detailCourses(req, res, next){
        const  courses = await Course.findById(req.params.id).lean();
        return res.render('admin/update-admin', {courses :courses,layout:'admin'})
    }

    async deleteCourses(req, res, next){
        // xu ly logic o day
        await Course.findByIdAndDelete(req.params.id,req.body);
        res.redirect('/admin')
    }

}

module.exports = new AdminHomeController;