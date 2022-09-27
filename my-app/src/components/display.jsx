import {
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Stack,
  Select,
} from "@chakra-ui/react";
import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import { Loader } from "../Context/Context";

function Legende() {
  const { abfrage } = useContext(Loader);
  var pcs = [];
  var raum = [];
  var cpu = [];
  var ram = [];
  var graka = [];
  var mb = [];
  var fp = [];
  var hw = [];

  useEffect(() => {
    Raumsetzer();
    CPUsetzer();
    Grakasetzer();
    Ramsetzer();
    MBsetzer();
    FPsetzer();
  }, [abfrage]);

  const CPUsetzer = async () => {
    try {
      await Axios.get("/cpu").then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          cpu.push(res.data[i].CPUName);
        }
        setcpuliste(cpu);

        // console.log(res.data);
      });
    } catch (e) {
      console.log(e);
    }
  };

  const Raumsetzer = async () => {
    try {
      await Axios.get("/raum").then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          raum.push(res.data[i].Raum_Nummer);
          console.log(res.data[i].Raum_Nummer);
        }

        setraumliste(raum);

        console.log(raumliste);
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

        sethwliste(res.data);
        // console.log(PC_Nummer);
        // console.log(hwliste);
        // console.log(hw);
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

  const Grakasetzer = async () => {
    try {
      await Axios.get("/graka").then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          graka.push(res.data[i].GrakaName);
        }

        setgrakaliste(graka);

        // console.log(grakaliste);
      });
    } catch (e) {
      console.log(e);
    }
  };

  const Ramsetzer = async () => {
    try {
      await Axios.get("/ram").then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          ram.push(res.data[i].RAMName);
        }

        setramliste(ram);

        // console.log(ramliste);
      });
    } catch (e) {
      console.log(e);
    }
  };

  const MBsetzer = async () => {
    try {
      await Axios.get("/mb").then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          mb.push(res.data[i].MBModell);
        }

        setmbliste(mb);

        // console.log(mbliste);
      });
    } catch (e) {
      console.log(e);
    }
  };

  const FPsetzer = async () => {
    try {
      await Axios.get("/fp").then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          fp.push(res.data[i].FPModell);
        }

        setfpliste(fp);

        // console.log(fpliste);
      });
    } catch (e) {
      console.log(e);
    }
  };

  const [pcliste, setpcliste] = useState([]);
  const [raumliste, setraumliste] = useState([]);
  const [cpuliste, setcpuliste] = useState([]);
  const [grakaliste, setgrakaliste] = useState([]);
  const [ramliste, setramliste] = useState([]);
  const [mbliste, setmbliste] = useState([]);
  const [fpliste, setfpliste] = useState([]);
  const [hwliste, sethwliste] = useState([]);

  return (
    <div>
      <Box>
        <Box maxW={"30%"}>
          <Stack>
            <Select
              placeholder="Raum auswählen"
              onChange={(e) => PCsetzer(e.target.value)}
            >
              {raumliste.map((v) => (
                <option value={v}>{v}</option>
              ))}
            </Select>

            <Select
              placeholder="PC auswählen"
              onChange={(e) => HWsetzer(e.target.value)}
            >
              {pcliste.map((v) => (
                <option value={v}>{v}</option>
              ))}
            </Select>
          </Stack>
        </Box>
        <div>
          <Box pb={"5%"} pt="3%">
            <TableContainer>
              <Table maxW={"60%"}>
                <Thead>
                  <Tr>
                    <Th>CPU</Th>
                    <Th>Graka</Th>
                    <Th>RAM</Th>
                    <Th>Motherboard</Th>
                    <Th>Festplatte</Th>
                  </Tr>
                </Thead>

                {hwliste.map((v) => (
                  <Tbody>
                    <Tr>
                      <Td>{v.CPU_Hersteller}</Td>
                      <Td>{v.Graka_Hersteller}</Td>
                      <Td>{v.RAM_Hersteller}</Td>
                      <Td>{v.MB_Bezeichnung}</Td>
                      <Td>{v.FP_Bezeichnung}</Td>
                    </Tr>
                    <Tr>
                      <Td>{v.CPU_Bezeichnung}</Td>
                      <Td>{v.Graka_Bezeichnung}</Td>
                      <Td>{v.RAM_Bezeichnung}</Td>
                      <Td>{v.MB_Chipsatz}</Td>
                      <Td>{v.FP_Typ}</Td>
                    </Tr>
                    <Tr>
                      <Td>{v.CPU_Kerne} Kerne</Td>
                      <Td>{v.Graka_VRAM}</Td>
                      <Td>{v.RAM_Speicher}</Td>
                      <Td>{v.MB_Faktor}</Td>
                      <Td>{v.FP_Speicher}</Td>
                    </Tr>
                    <Tr>
                      <Td>{v.CPU_Mhz} Mhz</Td>
                      <Td>{v.Graka_Mhz} Mhz</Td>
                      <Td>{v.RAM_Mhz} Mhz</Td>
                      <Td>{v.MB_RAM_Slots} RAM Slots</Td>
                      <Td></Td>
                    </Tr>
                    <Tr>
                      <Td></Td>
                      <Td></Td>
                      <Td>{v.RAM_Standard}</Td>
                      <Td>{v.MB_RAM_Typ}</Td>
                      <Td></Td>
                    </Tr>
                  </Tbody>
                ))}
              </Table>
            </TableContainer>
          </Box>
        </div>
      </Box>
    </div>
  );
}

export default Legende;
