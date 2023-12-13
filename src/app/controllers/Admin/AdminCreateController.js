const Course = require('../../models/Course');
const Category = require('../../models/category');
const image = require('../../models/productImage');
const detail = require('../../models/detailProduct');

class AdminCreateController {
    async adminCreate ( req, res, next) {
        const category = await Category.find().lean();
        const categoryNames = [];
        category.forEach(item => {
            categoryNames.push(item.category_name);
        });
        // console.log(categoryNames);
        // const  courses = await Course.create(req.body);
        // await image.create({
        //     productId: courses._id,
        //     image1: req.body.image1,
        //     image2: req.body.image2,
        // })

        // await detail.create({
        //     productId: courses._id,
        //     detailTop: req.body.detail1,
        //     detailBot: req.body.detail2,
        // })
        // console.log(req.body);
        return res.render('admin/create-admin', {layout:'admin', category:category});
    }

    async adminPost (req, res, next) {
        
        const  courses = await Course.create(req.body);
        const category = await Category.findById(req.body.category).lean();
        // console.log(req.body)
        
        await image.create({
            productId: courses._id,
            image1: req.body.image1,
            image2: req.body.image2,
        })

        await detail.create({
            productId: courses._id,
            detailTop: req.body.detail1,
            detailBot: req.body.detail2,
        })

        return res.redirect('back');
    }
}

module.exports = new AdminCreateController;