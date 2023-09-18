const Course = require('../models/Course');

class AdminCreateController {
    async adminCreate ( req, res, next) {
        // const array_male = await Course.find({type:"male"}).limit(8).lean();
        // const array_female = await Course.find({type:"female"}).limit(8).lean();
        // const array_couple = await Course.find({type:"couple"}).limit(4).lean();
        // return res.render('admin/create-admin',{courses:array_male , femaleList:array_female, couplelist:array_couple, layout:'admin'});
        
        const  courses = await Course.create(req.body);
        return res.redirect('/admin');
    }

    // store(  req, res, next) {
    //     // res.json(req.body);
    //     const formdata = req.body;
    //     const course = new Course(formdata)
    //     course.save()
    //         .then(() =>res.redirect('/'))
    //         .catch(error => {})
    // }
}

module.exports = new AdminCreateController;