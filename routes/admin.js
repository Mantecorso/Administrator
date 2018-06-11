const Express = require('express');
const Router = Express.Router();

Router.get('/',(req,res,next)=>{
   res.status(200).json(req.session.username || "Sesion no creada");
})

Router.get('/create',(req,res,next)=>{
    req.session.username="Luisito";
    req.session.isAdmin = true;
    res.redirect('/admin');
 })
//flash session npm install -S connect-flash


 //elimina una cockie
 Router.get('/remove',(req,res,next)=>{
    req.session.username=null;
    res.redirect('/admin');
 })

 //elimina todas las cokies guardadas
 Router.get('/destroy',(req,res,next)=>{
    req.session.destroy();
    res.redirect('/admin');
 })

module.exports = Router;
