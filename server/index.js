const express = require("express");
const app = express();
const port = 3001;
app.get("/", (req, res) => res.send("Server Connected"));

const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  port: "8889",
  user: "root",
  password: "root",
  database: "mysqltodo"
});

connection.connect();

connection.query("SELECT 1 + 1 AS solution", function(err, rows, fields) {
  if (err) throw err;

  console.log("The solution is: ", rows[0].solution);
});

connection.end();

app.listen(port, () => console.log(`Server is listening on Port ${port}`));
