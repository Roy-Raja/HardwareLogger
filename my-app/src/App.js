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
import { extendTheme } from "@chakra-ui/react";
import Axios from "axios";

import { Route, Routes } from "react-router-dom";

Axios.defaults.baseURL = "http://localhost:3001";

function App() {
  const theme = extendTheme({
    styles: {
      global: {
        body: {
          bgGradient: "linear(to-l, gray.700, gray.200)",
        },
      },
    },
  });
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
