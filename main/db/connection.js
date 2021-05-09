require('dotenv').config()

const util = require("util");
const mysql = require("mysql");

const connection = mysql.createConnection({
    host:"localhost",
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    // using "guides" because my computer uses that to refer to "employee"
    database: process.env.DB_DATABASE
});

connection.connect();

connection.query = util.promisify(connection.query);

module.exports = connection; 
