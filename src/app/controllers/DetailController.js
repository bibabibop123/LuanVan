const Course = require('../models/Course');
const Comment = require('./../models/comment');
const Like = require('./../models/likeProduct');
const image = require('./../models/productImage');
const detail = require('./../models/detailProduct');

class DetailController {
    async detail ( req, res, next) {
        const  courses = await Course.findOne({name_content: req.params.name}).lean();

        const imageProduct = await image.find({productId: courses._id}).lean();
        const detailProduct = await detail.find({productId: courses._id}).lean();
        // console.log('Course', detailProduct);
        const comments = await Comment.find({productId: courses._id}).sort({createdAt:-1}).lean();
        return res.render('detail', {courses :courses,comments:comments,imageProduct:imageProduct,detailProduct:detailProduct})
    }

    async like(req, res, next) {
        if(!req.user){
            req.flash('message', 'Vui lòng đăng nhập để đánh giá sản phẩm !!!');
            return res.redirect('/login');
        }
        
        const isLikeExits = await Like.findOne({productId: req.params.id,user:req.user._id});
        if(isLikeExits){
            const  courses = await Course.findById(req.params.id).lean();
            // await Like.findByIdAndDelete(req.params.id)
            // console.log('like', courses.likeNumber);
            // const likes = await Like.findById(req.params.id).lean();
            if (courses.likeNumber != 0 ) {
                await Course.findByIdAndUpdate(req.params.id,{$inc:{likeNumber:-1}}).lean();
                // console.log('like', likes);
                // console.log('isLikeExits', isLikeExits);
                await Like.remove(isLikeExits._id)
                req.flash('message', 'Xin góp ý để chúng tôi cải thiện sản phẩm !!!');
            }
            return  res.redirect('back');
        }
        await Like.create({
            productId:req.params.id,
            name_content:req.params.name_content,
            username: req.user.firstName + ' '+ req.user.lastName,  
            user:req.user._id,
        });
        await Course.findByIdAndUpdate(req.params.id,{$inc:{likeNumber:1}}).lean();
        req.flash('message', 'Cảm ơn bạn đã yêu thích sản phẩm !!!');
        return res.redirect('back');
    }

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