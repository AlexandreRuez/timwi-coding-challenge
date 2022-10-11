const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

// Create a connection to the database
const connection = mysql.createPool({
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

// open the MySQL connection
connection.on('connection', function (_conn) {
  if (_conn) {
  console.log("Successfully connected to the database.");
  }
  else {
    console.log("erreur connexion bdd");
  }
});

module.exports = connection;