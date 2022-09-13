import React from "react";
import Formular from "./pages/Formular";

import { ChakraProvider } from "@chakra-ui/react";
function App() {
  return (
    <ChakraProvider>
      <div>
        <Formular></Formular>
      </div>
    </ChakraProvider>
  );
}

export default App;
