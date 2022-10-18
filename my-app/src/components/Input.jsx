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
  Alert,
  AlertIcon,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import Context from "../Context/Context";

function Save() {
  var pcs = [];
  var raum = [];
  const [input, setinput] = useState({});
  useEffect(() => {
    hardware();
    Raumsetzer();
    console.log(input);
  }, [input]);

  const Raumsetzer = async () => {
    try {
      await Axios.get("/raum").then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          raum.push(res.data[i]);
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

        console.log(pcs);
      });
    } catch (e) {
      console.log(e);
    }
  };

  const HWsetzer = async (PC_Nummer) => {
    try {
      await Axios.get("/hardware", { params: { PC_Nummer } }).then((res) => {
        // for (let i = 0; i < res.data.length; i++) {
        //   hw.push(res.data[i]);
        //   // console.log(res.data[i]);
        //   console.log(hw);
        // }

        setInputlist(res.data);
        // console.log(PC_Nummer);
        // console.log(hwliste);
        // console.log(hw);
      });
    } catch (e) {
      console.log(e);
    }
    console.log(hwliste);
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

  const add = () => {
    Axios.post("/add", {
      PCinfos: input,
    })
      .then(function (response) {})
      .catch(function (error) {});
  };
  const toast = useToast();
  const { Inputlist, setInputlist } = useContext(Context);
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
        <Box w="50%" p="4" ml={"20%"} mt="5%">
          <Stack>
            <Select
              w="50%"
              bg={"white"}
              placeholder="Raum auswählen"
              onChange={(e) => (
                PCsetzer(e.target.value),
                console.log(e.target.value),
                setinput({ ...input, Raum_Nummer: e.target.value })
              )}
            >
              {raumliste.map((v) => (
                <option value={v.Raum_ID}>{v.Raum_Nummer}</option>
              ))}
            </Select>
            <Select
              w="50%"
              placeholder="PC auswählen"
              bg={"white"}
              onChange={(e) => (HWsetzer(e.target.value), console.log(pcliste))}
            >
              {pcliste.map((v) => (
                <option value={v}>{v}</option>
              ))}
            </Select>

            <Button w="50%" onClick={onOpen}>
              PC Hinzufügen
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>PC zusammenstellen</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Input
                    isRequired={true}
                    placeholder="PC Nummer hinzufügen"
                    onChange={(e) =>
                      setinput({ ...input, PC_Nummer: e.target.value })
                    }
                  />
                  <Select
                    bg={"white"}
                    placeholder="CPU auswählen"
                    onChange={(e) =>
                      setinput({ ...input, CPU_ID: e.target.value })
                    }
                  >
                    {cpuliste.map((v) => (
                      <option value={v.CPU_ID}>
                        {v.CPU_Hersteller +
                          " " +
                          v.CPU_Bezeichnung +
                          " " +
                          v.CPU_Kerne +
                          " Kerne " +
                          v.CPU_Mhz +
                          " Mhz"}
                      </option>
                    ))}
                  </Select>
                  <Select
                    bg={"white"}
                    placeholder="Graka auswählen"
                    onChange={(e) =>
                      setinput({ ...input, Graka_ID: e.target.value })
                    }
                  >
                    {grakaliste.map((v) => (
                      <option value={v.Graka_ID}>
                        {v.Graka_Hersteller +
                          " " +
                          v.Graka_Bezeichnung +
                          " " +
                          v.Graka_VRAM}
                      </option>
                    ))}
                  </Select>

                  <Select
                    bg={"white"}
                    placeholder="Ram auswählen"
                    onChange={(e) =>
                      setinput({ ...input, RAM_ID: e.target.value })
                    }
                  >
                    {ramliste.map((v) => (
                      <option value={v.RAM_ID}>
                        {v.RAM_Hersteller +
                          "  " +
                          v.RAM_Standard +
                          "  " +
                          v.RAM_Speicher}
                      </option>
                    ))}
                  </Select>
                  <Select
                    bg={"white"}
                    placeholder="Festplatte auswählen"
                    onChange={(e) =>
                      setinput({ ...input, FP_ID: e.target.value })
                    }
                  >
                    {fpliste.map((v) => (
                      <option value={v.FP_ID}>
                        {v.FP_Bezeichnung +
                          "    " +
                          v.FP_Typ +
                          "    " +
                          v.FP_Speicher}
                      </option>
                    ))}
                  </Select>
                  <Select
                    bg={"white"}
                    placeholder="Motherboard auswählen"
                    onChange={(e) =>
                      setinput({ ...input, MB_ID: e.target.value })
                    }
                  >
                    {mbliste.map((v) => (
                      <option value={v.MB_ID}>
                        {v.MB_Bezeichnung +
                          "  " +
                          v.MB_RAM_Typ +
                          "  " +
                          v.MB_Faktor +
                          "  " +
                          v.MB_Sockel}
                      </option>
                    ))}
                  </Select>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Abbrechen
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => {
                      add();
                      onClose();
                      toast({
                        title: "PC wurde hinzugefügt",

                        status: "success",
                        duration: 3000,
                        isClosable: true,
                      });
                    }}
                  >
                    Hinzufügen
                  </Button>
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
