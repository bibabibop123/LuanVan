const userAuthentication =(req,res,next)=>{
    if(req.user){
        return next();
    }
    return res.redirect('/');
}
const adminAuthentication =(req,res,next)=>{
    if(req.session.admin){
        return next();
    }
    return res.redirect('/');
}
module.exports = {
    userAuthentication,
    adminAuthentication,
}