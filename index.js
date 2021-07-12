const mysql = require("mysql");
const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");
require("console.table");


// create the connection information for the sql database
const connection = mysql.createConnection({
    host:"localhost",
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

// connects to mysql server and sql database
connection.connect((err) => {
  if (err) throw err;
  console.log(
    chalk.blue(
      `====================================================================================`
    )
  );
  console.log(``);
  console.log(chalk.cyan.bold(figlet.textSync("Employee Tracker")));
  console.log(``);
  console.log(chalk.cyan("By Savannah Fortson"));
  console.log(``);
  console.log(
    chalk.blue(
      `====================================================================================`
    )
  );
  init();
});