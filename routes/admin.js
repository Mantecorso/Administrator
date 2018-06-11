const Express = require('express');
const Router = Express.Router();

Router.get('/',(req,res,next)=>{
   res.status(200).json(req.session.username || "Sesion no creada");

})

Router.get('/create',(req,res,next)=>{
    req.session.username="Luisito";
    res.redirect('/admin');
 
 })

module.exports = Router;
