import React from "react";
import Legende from "../components/display";
import Navbar from "../components/navbar";
import { Loader } from "../Context/Context";
import { useState } from "react";

function Formular() {
  const [abfrage, setabfrage] = useState(0);
  return (
    <div>
      <Loader.Provider value={{ abfrage, setabfrage }}>
        <Navbar />
        <Legende />
      </Loader.Provider>
    </div>
  );
}

export default Formular;
