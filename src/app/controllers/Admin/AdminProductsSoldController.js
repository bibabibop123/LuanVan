const Course = require('../../models/Course');
const Category = require('../../models/category');
const image = require('../../models/productImage');
const detail = require('../../models/detailProduct');
const order = require('../../models/Order');

class AdminProductsSoldController {
    async productsSold ( req, res, next) {

        const {price, keyword} = req.query;

        const query = {};

        console.log(req.query)

        if (keyword) {
            query['name']= {$regex: keyword, $options: 'i'}
            
        }
        // const sort = {createdAt: -1};
        // if(price){
        //     if(price=='asc'){
        //         sort['total']= 1;
        //     }
        //     else sort['total']= -1;
            
        // } 

        const orders = await order.find(query).lean();

        //console.log(orders)

        const allProducts = [];

        for (const order of orders) {
          if (order.products && Array.isArray(order.products)) {
            allProducts.push(...order.products);
          }
        }

        // console.log(allProducts)

        const productSummary = {};

        allProducts.forEach(product => {
        const { name, quality, price, importPrice } = product;

        if (productSummary[name]) {
            productSummary[name].quality += quality;
            productSummary[name].totalPrice += quality * price;
            productSummary[name].totalImport += quality * importPrice;
        } else {
            productSummary[name] = {
                quality: quality,
                totalPrice: quality * price,
                totalImport: quality * importPrice
            };
        }
        });

        console.log(productSummary)
         const productSummaryArray = Object.entries(productSummary).map(([name, summary]) => ({ name,totalImport: summary.totalPrice - summary.totalImport ,quality: summary.quality, totalPrice: summary.totalPrice }));


        // console.log(productSummaryArray)


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