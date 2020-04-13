const mysql = require("mysql");
// Set up connection information
let connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "Jennings22!",
  database: "burgers_db"
});

// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//   connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: process.env.DB_PASSWORD,
//     database: 'burgers_db'
//   });
// };

// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;
