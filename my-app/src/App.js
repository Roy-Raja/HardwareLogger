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

import Display from "./pages/Display";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Display" element={<Display />}></Route>
        <Route path="/Input" element={<Input />}></Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
