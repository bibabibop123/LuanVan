const userAuthentication =(req,res,next)=>{
    if(req.user){
        console.log('user',req.user);
        return next();
    }
    console.log('user',req.user);
    return res.redirect('/');
}

const shipperAuthentication =(req,res,next)=>{
    if(req.staffShip){
        return next();
    }
    return res.redirect('/shipper/login');
}

const adminAuthentication =(req,res,next)=>{
    if(req.staff){
        return next();
    }
    return res.redirect('/admin/login');
}

module.exports = {
    userAuthentication,
    shipperAuthentication,
    adminAuthentication,
}