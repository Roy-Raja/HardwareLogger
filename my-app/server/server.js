const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const port = 3001;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "hardware", // Datenbank einfügen
});

// db.connect(function (err) {
//   if (err) throw err;
//   db.query(
//     "SELECT CPU_Bezeichnung, CPU_Hersteller FROM cpu",
//     function (err, result, fields) {
//       if (err) throw err;
//       console.log(result);
//     }
//   );
// });

app.get("/cpu", (req, res) => {
  db.query(
    `(SELECT CPU_Hersteller as 'CPUName', CPU_Bezeichnung as 'CPUModell', CPU_Kerne FROM cpu )`, //WHERE CPU_ID = ${abfrage}
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(
          "Meine Antwort" + result + " Und meine Response ist " + res
        );
        res.send(result);
      }
    }
  );
});

app.get("/raum", (req, res) => {
  db.query(
    `(SELECT PC_Nummer from pc, raum WHERE PC.RAUM_FK = raum.Raum_ID AND raum.Raum_Nummer = "B122" )`, //WHERE CPU_ID = ${abfrage}
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        // console.log(
        //   "Meine Antwort" + result + " Und meine Response ist " + res
        // );
        res.send(result);
      }
    }
  );
});

app.listen(port, () => {
  console.log("Server läuft auf " + port);
});
