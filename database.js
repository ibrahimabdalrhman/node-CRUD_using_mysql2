const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  port: "3306",
  user: "root",
  password: "1234",
  database: "notes_app",
});

module.exports = pool;
