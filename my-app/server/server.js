const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "hardware", // Datenbank einfügen
});

db.connect(function (err) {
  if (err) throw err;
  db.query("SELECT * FROM graka", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
