
const Category = require('../../models/category');


class AdminCreateCategoryController {
    async adminCreateCategory ( req, res, next) {

        return res.render('admin/createCategory', {layout:'admin'});
    }

    async adminPost (req, res, next) {
 
        // console.log(req.body)

        await Category.create({
            category_name: req.body.category_name,
            category_quantity: req.body.category_quantity,
        })


        return res.redirect('back');
    }
}

module.exports = new AdminCreateCategoryController;