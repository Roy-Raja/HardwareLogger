import {
  Box,
  Select,
  Stack,
  Input,
  Center,
  InputGroup,
  InputLeftAddon,
  MenuButton,
  Button,
  Menu,
  MenuList,
  MenuItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import { Loader } from "../Context/Context";

function Save() {
  var pcs = [];
  var raum = [];

  useEffect(() => {
    Raumsetzer();
    HWsetzer();
  });

  const Raumsetzer = async () => {
    try {
      await Axios.get("/raum").then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          raum.push(res.data[i].Raum_Nummer);
        }

        setraumliste(raum);

        // console.log(raumliste);
      });
    } catch (e) {
      console.log(e);
    }
  };

  const HWsetzer = async (PC_Nummer) => {
    try {
      await Axios.get("/hardware", { params: { PC_Nummer } }).then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          hwliste.push(res.data[i]);
          console.log(res.data);
        }
        sethwliste(res.data);
        console.log(PC_Nummer);
        console.log(hwliste);
      });
    } catch (e) {
      console.log(e);
    }
    console.log(hwliste);
  };

  const PCsetzer = async (Raum) => {
    try {
      await Axios.get("/pc", { params: { Raum } }).then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          pcs.push(res.data[i].PC_Nummer);
        }

        setpcliste(pcs);

        // console.log(pcs);
      });
    } catch (e) {
      console.log(e);
    }
  };

  const [pcliste, setpcliste] = useState([]);
  const [raumliste, setraumliste] = useState([]);

  const [hwliste, sethwliste] = useState([]);

  return (
    <>
      <Center>
        <Box w="50%" p="4">
          <Stack>
            <Select
              bg={"white"}
              placeholder="Raum auswählen"
              onChange={(e) => PCsetzer(e.target.value)}
            >
              {raumliste.map((v) => (
                <option value={v}>{v}</option>
              ))}
            </Select>

            <FormControl isRequired>
              <FormLabel>Platz Nr. eingeben</FormLabel>
              <Input placeholder="Platz Nr:" />
            </FormControl>
            {/* {hwliste.map((v) => (
            <Select placeholder="CPU auswählen">
              <option value="option1">{v.CPU_Hersteller}</option>
            </Select>
          ))} */}
          </Stack>
        </Box>
      </Center>
    </>
  );
}

export default Save;
