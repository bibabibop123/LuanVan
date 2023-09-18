const Course = require('../models/Course');
const Comment = require('./../models/comment');

class DetailController {
    async detail ( req, res, next) {
        // Course.findOne({name: req.params.name})
        // .then(courses => { 
        //     console.log('courses',courses);
        //     console.log(courses.img);
        //   res.render('detail', {courses :courses})
        // })
        // .catch(next);
        const  courses = await Course.findOne({name_content: req.params.name}).lean();
        const comments = await Comment.find({productId: courses._id}).sort({createdAt:-1}).lean();
        // console.log('comments', comments)
        return res.render('detail', {courses :courses,comments:comments})
    }

    // async comment ( req, res, next) {
    //     console.log(req.params.id,'id');
    //     const comment = await comment.findById(req.comment._id).lean();
    //     return res.render('comment',  {courses :courses});
    // }

    async comment (req, res, next) {
        if(!req.user){
            req.flash('message', 'Vui lòng đăng nhập để bình luận sản phẩm !!!');
            return res.redirect('/login');
        }
        // console.log('req', req.user);
        // console.log(req.params.id,'id');
        await Comment.create({
            productId:req.params.id,
            content: req.body.comment,
            username: req.user.firstName + ' '+ req.user.lastName,
        });
        const course = await Course.findById(req.params.id).lean();
        req.flash('message', 'Bình Luận Thành Công !!!');
        return res.redirect('/detail/'+course.name_content);

    }
}

module.exports = new DetailController;