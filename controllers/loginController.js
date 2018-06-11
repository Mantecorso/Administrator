const Controller = require('./controller');

//hereda todas las propiedades de controller
class loginController extends Controller
{
    constructor(req, res, next)
    {
        super(req, res, next)
    }
    index()
    {
        this.res.render('login', {title:'Login', layout:'layout'});
    }
}

module.exports=loginController;
