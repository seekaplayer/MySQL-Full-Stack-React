// Helpers
const bodyParser = require("body-parser");
const cors = require("cors");

// Express
const express = require("express");
const app = express();
const port = 3001;

// MySQL
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  port: "8889",
  user: "root",
  password: "root",
  database: "mysqltodo"
});

// Using Helpers
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// MySQL Connection Starts
connection.connect(err => {
  // If there is any connection issues, an error will generate
  if (err) {
    console.warn(
      err,
      `We were unable to connect to the ${connection.config.database} please review the errors`
    );
    throw err;
  }

  // If you succeed with the connection you'll see a message
  console.log(
    `Connected to MySQL using ${connection.config.database} Database`
  );
});

// Get todos from the Database
app.get("/getTodosFromDb", (req, res) => {
  connection.query("SELECT * FROM `todos` ORDER BY id ASC", (err, result) => {
    if (err) {
      res.status(500).json({
        errorMessage: "Couldn't get data from the database"
      });
      console.warn("There was an issue selecting your data");
      throw err;
    }
    console.log(result);
    res.status(200).json({ result });
  });
});

// Starts the Express Server
app.listen(port, () => console.log(`Server is listening on Port ${port}`));
