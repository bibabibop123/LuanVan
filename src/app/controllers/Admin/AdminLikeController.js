const Course = require('../../models/Course');
const Category = require('../../models/category');
const image = require('../../models/productImage');
const detail = require('../../models/detailProduct');

class AdminLikeController {
    async productLike ( req, res, next) {
        const categoryList = await Category.find().lean();
        const {brand,price,categoryId,keyword} = req.query;

        const query = {};

        if (keyword) {
            query['name_content']= {$regex: keyword, $options: 'i'}
            
        }

        if (categoryId) {
            query['categoryId'] = categoryId;
        } 
        if(brand && brand.length >0){
            query['brand']=brand;
        } 
        const sort = {createdAt: -1};
        if(price){
            if(price=='asc'){
                sort['total']= 1;
            }
            else sort['total']= -1;
            
        } 

        const products = await Course.find(query).populate('categoryId').sort({ likeNumber: -1 }).lean();
        // const array_male = await Course.find(query).sort(sort).limit(50).populate('categoryId').lean();
        // const categories = await products.findById(req.params._id).lean();

        console.log('products',products);
        return res.render('admin/likeAdmin', {layout:'admin',products:products, categoryList:categoryList});
    }

    // store(  req, res, next) {
    //     // res.json(req.body);
    //     const formdata = req.body;
    //     const course = new Course(formdata)
    //     course.save()
    //         .then(() =>res.redirect('/'))
    //         .catch(error => {})
    // }

    // async updateCourse(req, res, next){
    //     // console.log('updateCourse');
    //     console.log(req.body);
    //     // console.log(req.params.id);
    //     await Course.findByIdAndUpdate(req.params.id,req.body);
    //     const imageData =await image.findOneAndUpdate({productId:req.params.id},{...req.body},{new:true});
    //     // console.log('imageData',imageData);
    //     const detailData =await detail.findOneAndUpdate({productId:req.params.id},{...req.body},{new:true});
    //     res.redirect('/admin/product-admin')
    // }

    // async detailCourses(req, res, next){
    //     const  courses = await Course.findById(req.params.id).lean();
    //     const imageProduct = await image.find({productId: courses._id}).lean();
    //     const detailProduct = await detail.find({productId: courses._id}).lean();

    //     // console.log('detail', req.body.detail)


    //     return res.render('admin/update-admin', {courses :courses,imageProduct:imageProduct,detailProduct:detailProduct,layout:'admin'})
    // }

    // async deleteCourses(req, res, next){
    //     // xu ly logic o day
    //     await Course.findByIdAndDelete(req.params.id,req.body);
    //     res.redirect('/admin/product-admin')
    // }

}

module.exports = new AdminLikeController;