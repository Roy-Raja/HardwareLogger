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
import Context from "../Context/Context";

function Display() {
  var pcs = [];
  var raum = [];

  useEffect(() => {
    Raumsetzer();
  }, []);

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

  // const HWsetzer = async (PC_Nummer) => {
  //   try {
  //     await Axios.get("/hardware", { params: { PC_Nummer } }).then((res) => {
  //       // for (let i = 0; i < res.data.length; i++) {
  //       //   hw.push(res.data[i]);
  //       //   // console.log(res.data[i]);
  //       //   console.log(hw);
  //       // }

  //       sethwliste(res.data);
  //       // console.log(PC_Nummer);
  //       // console.log(hwliste);
  //       // console.log(hw);
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  //   console.log(hwliste);
  // };

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
  const { Inputlist, setInputlist } = useContext(Context);

  const [pcliste, setpcliste] = useState([]);
  const [raumliste, setraumliste] = useState([]);
  const [hwliste, sethwliste] = useState([]);

  return (
    <div>
      <Box>
        <Box maxW={"30%"} ml="30%">
          <Stack>
            {/* <Select
              placeholder="Raum auswählen"
              bg={"white"}
              onChange={(e) => PCsetzer(e.target.value)}
            >
              {raumliste.map((v) => (
                <option value={v}>{v}</option>
              ))}
            </Select>

            <Select
              placeholder="PC auswählen"
              bg={"white"}
              onChange={(e) => HWsetzer(e.target.value)}
            >
              {pcliste.map((v) => (
                <option value={v}>{v}</option>
              ))}
            </Select> */}
          </Stack>
        </Box>
        <div>
          <Box pb={"5%"} pt="3%">
            <TableContainer ml="15%">
              <Table maxW={"80%"} w="100%" h="200px">
                <Thead>
                  <Tr>
                    <Th>CPU</Th>
                    <Th>Graka</Th>
                    <Th>RAM</Th>
                    <Th>Motherboard</Th>
                    <Th>Festplatte</Th>
                  </Tr>
                </Thead>

                {Inputlist.map((v) => (
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

export default Display;
