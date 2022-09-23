import React from "react";
import Anzeige from "../components/Display";
import { Loader } from "../Context/Context";
import { useState } from "react";

function Formular() {
  const [abfrage, setabfrage] = useState(0);
  return (
    <div>
      <Loader.Provider value={{ abfrage, setabfrage }}>
        <Anzeige />
      </Loader.Provider>
    </div>
  );
}

export default Formular;
