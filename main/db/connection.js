const util = require("util");
const mysql = require("mysql");

const connection = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "",
    // using "guides" because my computer uses that to refer to "employee"
    database: "guides"
});

connection.connect();

connection.query = util.promisify(connection.query);

module.exports = connection; 
