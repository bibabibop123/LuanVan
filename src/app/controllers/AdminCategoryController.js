const Course = require('../models/Course');
const Category = require('../models/category');

class AdminCategoryController {
    async adminCategory ( req, res, next) {
        const categorys = await Category.find().lean();
        const cateogoryData = await Promise.all(categorys.map(async(category)=>{
            let total = 0;
            const listCourse = await Course.find({categoryId: category._id}).lean();
            listCourse.forEach((category)=>{total += category.quantity});
            return {...category,category_quantity: total}
        }))
        return res.render('admin/category-admin',{layout:'admin', categorys:cateogoryData});
    }

    // async sumCourse (req, res, next) {
    //     const coupleCategory = await Category.findOne({ category_name: "couple" })
    //     const array_couple = await Course.find({categoryId: coupleCategory._id}).limit(8).populate('categoryId').lean();

    //     // const listCategory = await Course.findOne({category_name: "couple"});
    //     // const array_couple = await Course.find({categoryId: listCategory._id}).limit(8).populate('categoryId').lean();
    //     console.log('array_couple', array_couple);
    //     return res.render('array_couple', array_couple);
    // }
}

module.exports = new AdminCategoryController;