const Course = require('../models/Course');

class CartController {
    async cart ( req, res, next) {
        const cart = req.session.cart || [];
        // console.log('cart',cart);
        let total = 0;
        cart.forEach(element => {
            total += element.price * element.quality;
        });
        res.render('cart',{cart:cart,total:total});
    }

    async addCart(req,res,next){
        if(!req.user){
            req.flash('message', 'Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng !!!');
            return res.redirect('/login');
        }
        const id = req.params.id;
        const product = await Course.findById(id);
        if(!product){
            return res.redirect('/');
        }
        const cart = req.session.cart || [];
        const  coursesQuantity = await Course.findById(req.params.id).lean();
        if(coursesQuantity.quantity == 0) {
            req.flash('message', ' sản phẩm đã hết !!!');
            return res.redirect('back');
        }
        const cartExist = cart.find((item)=>item.id ===id);
        if(cartExist){
            let cartNew = cart.map((item)=>{
                if(item.id==id){
                    // console.log('quantity', coursesQuantity.quantity)
                    // console.log('cart', item.quality);
                    if(item.quality == coursesQuantity.quantity) {
                        req.flash('message', ' bạn đã thêm quá số lượng sản phẩm đang có !!!');
                        // return res.redirect('back');
                    } else {
                        req.flash('message', ' Thêm sản phẩm thành công vào giỏ hàng !!!');
                        return {...item,quality:item.quality+1}
                    }
                }
                return item;
            })
            // console.log('cartNew',cartNew);
            req.session.cart = cartNew;
        }else {
            cart.push({
                id: product._id,
                image:product.img,
                name: product.name_content,
                price: product.total,
                quality:1,
                description:product.detail
            })
            req.session.cart = cart;
            req.flash('message', ' Thêm sản phẩm thành công vào giỏ hàng !!!');
        }
        return res.redirect(`/detail/${product.name_content}`)
    }

    async removeCart(req,res){
        const cart = req.session.cart || [];
        const id = req.params.id;
        const newCart = cart.filter((item)=>{
            return item.id !=id;
        })
        req.session.cart = newCart;
        req.flash('message', ' Xóa thành công !!!');
        return res.redirect(`/cart`)
    }

    async incrementCart(req,res){
        const cart = req.session.cart || [];
        const id = req.params.id;
        const  coursesQuantity = await Course.findById(req.params.id).lean();
        const newCart = cart.map((item)=>{
            if(item.id == id){
                if (item.quality == coursesQuantity.quantity) {
                    // console.log('Course', coursesQuantity.quantity);
                    // itemQuantity.disabled = true;
                    req.flash('message', 'Bạn đã mua quá số lượng đang có !!!');
                    
                } else {
                    return {...item,quality:item.quality+1}
                }
            }
            return item;
        })
        req.session.cart = newCart;
        return res.redirect(`/cart`)
    }

    async decrementCart(req,res){
        const cart = req.session.cart || [];
        const id = req.params.id;
        // console.log('cart',cart);
        const newCart = cart.map((item)=>{
            if(item.id == id){
                if(item.quality >1){
                    return {...item,quality:item.quality-1}
                }
            }
            return item;
        })
        req.session.cart = newCart;
        return res.redirect(`/cart`)
    }
}

module.exports = new CartController;