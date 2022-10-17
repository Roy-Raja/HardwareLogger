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
  db.query(`(SELECT * FROM raum )`, (err, result) => {
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
    `(SELECT PC_Nummer FROM pc, raum WHERE pc.Raum_FK = Raum.Raum_ID AND Raum.Raum_ID = "${pcsucher}" )`,
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

app.get("/hardware", (req, res) => {
  // console.log(req.query.PC_Nummer);
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

app.post("/add", (req, res) => {
  const PCinfos = req.body.PCinfos;

  db.query(
    "INSERT INTO pc (PC_Nummer, CPU_FK, GRAKA_FK, RAM_FK, MB_FK, FP_FK, Raum_FK) VALUES (?,?,?,?,?,?,?)",
    [
      PCinfos.PC_Nummer,
      PCinfos.CPU_ID,
      PCinfos.Graka_ID,
      PCinfos.RAM_ID,
      PCinfos.MB_ID,
      PCinfos.FP_ID,
      PCinfos.Raum_Nummer,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});
// Methode über Datenbankaufrufe
//SELECT CPU_ID FROM cpu WHERE CPU_Bezeichnung= "gespeicherter ausgewählter CPU-String"
// var cpu_id_update = "Zahl"
//SELECT GRAKA_ID FROM graka WHERE GRAKA_Bezeichnung= "gespeicherter ausgewählter GRAKA-String"
// var graka_id_update = "Zahl"
// etc für jeden WERT

//Methode mit übertragener gespeicherter ID für alles
//INSERT INTO pc (PC_Nummer, CPU_FK, GRAKA_FK, RAM_FK, MB_FK, FP_FK, RAUM_FK) VALUES ("Platznummer-String", CPU_ID, GRAKA_ID, RAM_ID, MB_ID, FP_ID, RAUM_ID)
//Beispiel: INSERT INTO pc (PC_Nummer, CPU_FK, GRAKA_FK, RAM_FK, MB_FK, FP_FK, RAUM_FK) VALUES ("Platz 10",1,3,2,1,2,2);

app.listen(port, () => {
  console.log("Server läuft auf " + port);
});
