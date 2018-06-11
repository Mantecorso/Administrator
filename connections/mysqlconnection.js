const MYSQL = require('mysql');
const CONN = MYSQL.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'iker5nerea13',
    database: 'integration'
});
//contrasenya de la base de datos mysql workbench

module.exports = CONN;