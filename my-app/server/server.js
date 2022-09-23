const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

var abfrage = 0;

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "hardware", // Datenbank einfügen
});

db.connect(function (err) {
  if (err) throw err;
  db.query(
    "SELECT CPU_Bezeichnung, CPU_Hersteller FROM cpu",
    function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    }
  );
});

app.get("/cpu", (req, res) => {
  db.query(
    `(SELECT CPU_Hersteller as 'CPUName' FROM cpu = ${abfrage})`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(abfrage);
      }
    }
  );
});
