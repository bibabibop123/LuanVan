const Course = require('../../models/Course');
const Category = require('../../models/category');
const image = require('../../models/productImage');
const detail = require('../../models/detailProduct');
const order = require('../../models/Order');

class AdminProductsSoldController {
    async productsSold ( req, res, next) {

        const orders = await order.find().lean();

        const allProducts = [];

        for (const order of orders) {
          if (order.products && Array.isArray(order.products)) {
            allProducts.push(...order.products);
          }
        }

        const productSummary = {};

        allProducts.forEach(product => {
        const { name, quality, price } = product;

        if (productSummary[name]) {
            productSummary[name].quality += quality;
            productSummary[name].totalPrice += quality * price;
        } else {
            productSummary[name] = {
            quality: quality,
            totalPrice: quality * price,
            };
        }
        });

        const {price, keyword} = req.query;

        const query = {};

        if (keyword) {
            query['name_content']= {$regex: keyword, $options: 'i'}
            
        }
        const sort = {createdAt: -1};
        if(price){
            if(price=='asc'){
                sort['total']= 1;
            }
            else sort['total']= -1;
            
        } 


        const productSummaryArray = Object.entries(productSummary).map(([name, summary]) => ({ name, quality: summary.quality, totalPrice: summary.totalPrice }));


        // const filteredProductSummaryArray = productSummaryArray.filter(item => {
        //     if (query.name_content) {
        //       const nameContentRegex = new RegExp(query.name_content.$regex, query.name_content.$options);
        //       return nameContentRegex.test(item.name);
        //     }
        //     return true;
        //   });


        return res.render('admin/productsSold', {layout:'admin',productSummaryArray:productSummaryArray});
    }

    async detailCourses(req, res, next){
        const  courses = await Course.findById(req.params.id).populate('categoryId').lean();
        const imageProduct = await image.find({productId: courses._id}).lean();
        const detailProduct = await detail.find({productId: courses._id}).lean();
        const categoryData = await Category.find({categoryId: Category._id}).lean();
        // console.log('detail', courses)


        return res.render('admin/update-admin', {categoryData:categoryData,courses :courses,imageProduct:imageProduct,detailProduct:detailProduct,layout:'admin'})
    }

}

module.exports = new AdminProductsSoldController;