const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const { CurvePath } = require("three");

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
  db.query(
    "SELECT CPU_Bezeichnung, CPU_Hersteller FROM CPU",
    function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    }
  );
});

app.get("/Farbe", (req, res) => {
  db.query(
    `(SELECT CPU_Bezeichnung, CPU_Hersteller FROM CPU)`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
