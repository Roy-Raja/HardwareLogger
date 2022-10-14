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

app.get("/raum", (req, res) => {
  db.query(`(SELECT Raum_Nummer FROM raum )`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(
      //   "Meine Antwort" + result + " Und meine Response ist " + res
      // );
      res.send(result);
    }
  });
});

app.get("/pc", (req, res) => {
  // console.log(req.query.Raum);
  var pcsucher = req.query.Raum;
  db.query(
    `(SELECT PC_Nummer FROM pc, raum WHERE pc.Raum_FK = Raum.Raum_ID AND Raum.Raum_Nummer = "${pcsucher}" )`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/hardware", (req, res) => {
  console.log(req.query.PC_Nummer);
  var hwsucher = req.query.PC_Nummer;
  db.query(
    `(SELECT pc.PC_Nummer,cpu.CPU_Bezeichnung, cpu.CPU_Hersteller, cpu.CPU_Kerne, cpu.CPU_Mhz,graka.Graka_Bezeichnung, graka.Graka_Hersteller, graka.Graka_Mhz, graka.Graka_VRAM,ram.RAM_Bezeichnung, ram.RAM_Hersteller, ram.RAM_Speicher, ram.RAM_Standard, ram.RAM_Mhz,motherboard.MB_Bezeichnung, motherboard.MB_Faktor, motherboard.MB_Sockel, motherboard.MB_RAM_Slots, motherboard.MB_RAM_Typ, motherboard.MB_Chipsatz,festplatte.FP_Bezeichnung, festplatte.FP_Typ, festplatte.FP_Speicher` +
      ` FROM pc, cpu, graka, ram, motherboard, festplatte` +
      ` WHERE pc.PC_Nummer = "${hwsucher}"` +
      ` AND pc.CPU_FK = cpu.CPU_ID` +
      ` AND pc.graka_FK = graka.Graka_ID` +
      ` AND pc.RAM_FK = ram.RAM_ID` +
      ` AND pc.MB_FK = motherboard.MB_ID` +
      ` AND pc.FP_FK = festplatte.FP_ID)`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(result);
      }
    }
  );
});

app.get("/cpu", (req, res) => {
  db.query(`(SELECT * from cpu )`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.get("/graka", (req, res) => {
  db.query(`(SELECT * from graka )`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/ram", (req, res) => {
  db.query(`(SELECT * FROM ram)`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/mb", (req, res) => {
  db.query(`(SELECT * FROM motherboard)`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/fp", (req, res) => {
  db.query(`(SELECT *  FROM festplatte)`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(port, () => {
  console.log("Server läuft auf " + port);
});
