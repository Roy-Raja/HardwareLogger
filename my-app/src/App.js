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

import Input from "./pages/Input";

import Formular from "./pages/Display";

import Axios from "axios";

import { Route, Routes } from "react-router-dom";

Axios.defaults.baseURL = "http://localhost:3001";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Display" element={<Formular />}></Route>
        <Route path="/Input" element={<Input />}></Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
