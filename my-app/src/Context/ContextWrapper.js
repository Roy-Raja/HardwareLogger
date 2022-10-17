import Context from "../Context/Context";
import { useState } from "react";
function ContextWrapper({ children }) {
  const [Inputlist, setInputlist] = useState([]);

  return (
    <Context.Provider value={{ Inputlist, setInputlist }}>
      {children}
    </Context.Provider>
  );
}
export default ContextWrapper;
