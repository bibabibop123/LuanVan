const coursesRouter = require('./courses');
const femaleRouter = require('./female');
const coupleRouter = require('./couple');
const detailRouter = require('./detail');
const creatRouter = require('./creat');
const loginRouter = require('./login');
const registerRouter = require('./register');
const cartRouter = require('./cart');
const paymentRouter = require('./payment');
const searchRouter = require('./search');
const adminRouter = require('./admin');
const shipperRouter = require('./shipper');
const orderRouter = require('./order');
const userRouter = require('./user');
const addressRouter = require('./addressUser');
const forgotpassRouter = require('./forgotPassword');
const confirmpassRouter = require('./confirmPass');
const detailOrderRouter = require('./detailOrder');
const detailComfirmRouter = require('./detailComfirm');
const detailShippingRouter = require('./detailShipping');
const detailCompleteRouter = require('./detailComplete');
const detailCancelRouter = require('./detailCancel');
const changeRouter = require('./change-password');

// const editRouter = require('./edit');


function route(app) {
    app.use('/courses', coursesRouter);
    app.use('/female', femaleRouter);
    app.use('/couple', coupleRouter);
    app.use('/detail', detailRouter);
    app.use('/creat', creatRouter);
    app.use('/login', loginRouter);
    app.use('/register', registerRouter);
    app.use('/cart', cartRouter);
    app.use('/payment', paymentRouter);
    app.use('/search', searchRouter);
    app.use('/admin',adminRouter);
    app.use('/shipper',shipperRouter);
    app.use('/order',orderRouter);
    app.use('/addressUser',addressRouter);
    app.use('/detailOrder',detailOrderRouter);
    app.use('/detailComfirm',detailComfirmRouter);
    app.use('/detailShipping',detailShippingRouter);
    app.use('/detailComplete',detailCompleteRouter);
    app.use('/detailCancel',detailCancelRouter);
    app.use('/user',userRouter);
    app.use('/forgotPassword',forgotpassRouter);
    app.use('/confirmPass',confirmpassRouter);
    app.use('/change-password',changeRouter);
    // app.use('/update', updateRouter);
    // app.use('/edit', editRouter);
    // app.use('/', siteRouter)
    app.get('/logout',(req,res)=>{
        req.session.destroy();
        return res.redirect('/');
    })
}

module.exports = route;