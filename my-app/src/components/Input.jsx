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
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import { Loader } from "../Context/Context";

function Save() {
  var pcs = [];
  var raum = [];

  useEffect(() => {
    hardware();
    Raumsetzer();
  }, []);

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
  const hardware = async () => {
    try {
      await Axios.get("/cpu").then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          pcs.push(res.data[i]);
        }
        setcpuliste(res.data);
        console.log(cpuliste);
      });
      await Axios.get("/graka").then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          pcs.push(res.data[i]);
        }
        setgrakaliste(res.data);
        console.log(grakaliste);
      });
      await Axios.get("/ram").then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          pcs.push(res.data[i]);
        }
        setramliste(res.data);
        console.log(ramliste);
      });
      await Axios.get("/fp").then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          pcs.push(res.data[i]);
        }
        setfpliste(res.data);
        console.log(ramliste);
      });
      await Axios.get("/mb").then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          pcs.push(res.data[i]);
        }
        setmbliste(res.data);
        console.log(ramliste);
      });
    } catch (e) {
      console.log(e);
    }
  };

  const [cpuliste, setcpuliste] = useState([]);
  const [grakaliste, setgrakaliste] = useState([]);
  const [ramliste, setramliste] = useState([]);
  const [fpliste, setfpliste] = useState([]);
  const [mbliste, setmbliste] = useState([]);
  const [pcliste, setpcliste] = useState([]);
  const [raumliste, setraumliste] = useState([]);
  const [hwliste, sethwliste] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
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

            <Button onClick={onOpen}>Open Modal</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>PC zusammenstellen</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Select
                    bg={"white"}
                    placeholder="CPU auswählen"
                    onChange={(e) => console.log(e.target)}
                  >
                    {cpuliste.map((v) => (
                      <option value={v}>
                        {v.CPU_Hersteller + " " + v.CPU_Bezeichnung}
                      </option>
                    ))}
                  </Select>
                  <Select bg={"white"} placeholder="Graka auswählen">
                    {grakaliste.map((v) => (
                      <option value={v}>
                        {v.Graka_Hersteller + " " + v.Graka_Bezeichnung}
                      </option>
                    ))}
                  </Select>

                  <Select bg={"white"} placeholder="Ram auswählen">
                    {ramliste.map((v) => (
                      <option value={v}>
                        {v.RAM_Hersteller + " " + v.RAM_Bezeichnung}
                      </option>
                    ))}
                  </Select>
                  <Select bg={"white"} placeholder="Festplatte auswählen">
                    {fpliste.map((v) => (
                      <option value={v}>{v.FP_Bezeichnung}</option>
                    ))}
                  </Select>
                  <Select bg={"white"} placeholder="Motherboard auswählen">
                    {mbliste.map((v) => (
                      <option value={v}>{v.MB_Bezeichnung}</option>
                    ))}
                  </Select>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button variant="ghost">Secondary Action</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Stack>
        </Box>
      </Center>
    </>
  );
}

export default Save;
