const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    console.log('login');
    // res.send('login');
    res.render('admin/login',{layout:false});
})
router.post('/',(req,res)=>{
    const {username,password} = req.body;
    if(username=='admin@gmail.com' && password == '123456'){
        req.session.admin = true;
        return res.redirect('/admin');
    }
    return res.redirect('/admin/login');
})
module.exports = router;