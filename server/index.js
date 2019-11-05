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
  if (err) {
    console.warn(
      err,
      `We were unable to connect to the ${connection.config.database} please review the errors`
    );
    throw err;
  }
  console.log(
    `Connected to MySQL using ${connection.config.database} Database`
  );
});

// Get todos from the Database
app.get("/getTodosFromDb", (req, res) => {
  connection.query("SELECT * FROM todos ORDER BY id ASC", (err, result) => {
    if (err) {
      res.status(500).json({
        errorMessage: "Couldn't get data from the database"
      });
      throw err;
    }
    res.status(200).json({ result });
  });
});

// Insert todos into the database
app.post("/insertTodosIntoDb", (req, res) => {
  connection.query("INSERT INTO todos SET ?", req.body, (err, result) => {
    if (err) {
      res.status(500).json({
        errorMessage: "We couldn't insert that Todo Item!"
      });
      throw err;
    }
    connection.query(
      "SELECT * FROM todos WHERE id=?",
      result.insertId,
      (err, row) => {
        res.status(200).json(row);
      }
    );
  });
});

// Updates the Status of the Todo
app.put("/updateTodoStatus/:id", (req, res) => {
  connection.query(
    "UPDATE todos SET status = 1 WHERE id=?",
    req.params.id,
    (err, result) => {
      if (err) {
        res.status(500).json({
          errorMessage: "We couldn't update the Todo Status"
        });
        throw err;
      }
      connection.query(
        "Select * FROM todos WHERE id=?",
        req.params.id,
        (err, row) => {
          res.status(200).json(row);
        }
      );
    }
  );
});

// Updates the Todo item in the Database
app.put("/updateTodoItem/:id", (req, res) => {
  connection.query(
    "UPDATE todos SET name=? WHERE id=?",
    [req.params.name, req.params.id],
    (err, result) => {
      if (err) {
        res.status(500).json({
          errorMessage: "We couldn't update that Todo Item"
        });
        throw err;
      }
      connection.query(
        "Select * FROM todos WHERE id=?",
        req.params.id,
        (err, row) => {
          res.status(200).json(row);
        }
      );
    }
  );
});

// Delete Todos from the Database
app.delete("/deleteTodoFromDb/:id", (req, res) => {
  connection.query(
    "DELETE FROM todos WHERE id=?",
    req.params.id,
    (err, result) => {
      if (err) {
        res.status(500).json({
          errorMessage: "We couldn't Delete that Todo"
        });
        throw err;
      }
      connection.query("SELECT * FROM todos ORDER BY id ASC", (err, row) => {
        if (err) {
          res.status(500).json({
            errorMessage: "Couldn't get data from the database"
          });
          throw err;
        }
        res.status(200).json({ row });
      });
    }
  );
});

// Starts the Express Server
app.listen(port, () => console.log(`Server is listening on Port ${port}`));
