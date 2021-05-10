// DO NOT CLICK "convert to ES6 module"!
// .env
require('dotenv').config()

const util = require("util");
// MySQL Package
const mysql = require("mysql");

const connection = mysql.createConnection({
    host:"localhost",
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    // using "guides" because my company uses that to refer to "employee"
    database: process.env.DB_DATABASE
});

connection.connect(function(err){
    if(err) throw err;
});

connection.query = util.promisify(connection.query);

module.exports = connection; 