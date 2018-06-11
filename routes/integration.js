const Express = require('express');
const Router = Express.Router();
const LoginController = require('../controllers/loginController');

Router.get('/',(req, res, next)=>{
    res.status(200).json("integracion");
})

Router.get('/login', (req, res, next)=>{
    let loginController = new loginController(req, res, next);
    loginController.index();
})

module.exports= Router;