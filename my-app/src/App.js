import React from "react";

import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react";

import Login from "./pages/Login";

import Eingabe from "./pages/Eingabe";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/Login" element={<Login />}></Route>

        <Route path="/Eingabe" element={<Eingabe />}></Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
