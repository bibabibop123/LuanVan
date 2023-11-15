const Course = require('../../models/Course');
const Category = require('../../models/category');
const image = require('../../models/productImage');
const detail = require('../../models/detailProduct');

class AdminProductQualityController {
    async productQuality ( req, res, next) {
        const categoryList = await Category.find().lean();
        const {quantity,importPrice,categoryId,keyword} = req.query;

        const query = {};

        if (keyword) {
            query['name_content']= {$regex: keyword, $options: 'i'}
            
        }

        if (categoryId) {
            query['categoryId'] = categoryId;
        } 

        // if(quantity){
        //     query['quantity']=quantity;
        // } 

        const sort = {createdAt: -1};
        if(importPrice){
            if(importPrice=='asc'){
                sort['total']= 1;
            }
            else sort['total']= -1;
            
        } 

        if(quantity){
            if(quantity=='asc'){
                sort['quantity']= 1;
            }
            else sort['quantity']= -1;
            
        } 

        const products = await Course.find(query).populate('categoryId').sort(sort).lean();

        return res.render('admin/productQuality', {layout:'admin',products:products, categoryList:categoryList});
    }


    async updateCourse(req, res, next){

        // console.log(req.body);

        if(req.body.total <= req.body.importPrice) {
            req.flash('message', 'Giá nhập đang cao hơn giá bán !!!');
            res.redirect('back')
        }
        else {
            await Course.findByIdAndUpdate(req.params.id,req.body);
            res.redirect('/admin/productQuality')
        }
        

        // await Course.findByIdAndUpdate(req.params.id,req.body);
        // console.log(req.body.importPrice);
        
    }

    async detailCourses(req, res, next){
        const  courses = await Course.findById(req.params.id).populate('categoryId').lean();
        const imageProduct = await image.find({productId: courses._id}).lean();
        const detailProduct = await detail.find({productId: courses._id}).lean();
        const categoryData = await Category.find({categoryId: Category._id}).lean();
        // console.log('detail', courses)


        return res.render('admin/detailQuality', {categoryData:categoryData,courses :courses,imageProduct:imageProduct,detailProduct:detailProduct,layout:'admin'})
    }

    // async deleteCourses(req, res, next){
    //     // xu ly logic o day
    //     await Course.findByIdAndDelete(req.params.id,req.body);
    //     res.redirect('/admin/product-admin')
    // }

}

module.exports = new AdminProductQualityController;