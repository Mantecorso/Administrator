
const Express = require('express');
const Router = Express.Router();

Router.get('/',(req, res, next)=>{
    res.send(req.flash('info'));
})

module.exports= Router;