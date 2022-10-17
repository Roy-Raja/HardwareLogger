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

import Input from "./pages/Input";

import { extendTheme } from "@chakra-ui/react";
import Axios from "axios";
import EingabeContext from "./Context/Context";

import { Route, Routes } from "react-router-dom";
import ContextWrapper from "./Context/ContextWrapper";

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
      <ContextWrapper>
        <Routes>
          <Route path="/Input" element={<Input />}></Route>
        </Routes>
      </ContextWrapper>
    </ChakraProvider>
  );
}

export default App;
