let conn = require('../connections/mysqlconnection');

class UserModel
{
    findUser(username, cb){
        if(!conn) return cb("No se ha podido crear la conexion");
        const SQL = "SELECT * FROM users WHERE username LIKE%" + username + "%;";
        con.query(SQL, (error, rows)=>{
            if(error) return cb(error);
            else return cb(null, rows);
        })
    }
}