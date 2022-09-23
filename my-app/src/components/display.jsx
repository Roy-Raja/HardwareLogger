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
  // const { abfrage } = useContext(Loader);
  // var pcs = [];

  // useEffect(() => {
  //   PCsetzer();
  // }, [abfrage]);

  // const PCsetzer = async () => {
  //   try {
  //     await Axios.get("/cpu").then((res) => {
  //       for (let i = 0; i < res.data.length; i++) {
  //         pcs.push(res.data[i].CPUName);
  //       }
  //       setpcliste(pcs);
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // const [pcliste, setpcliste] = useState([]);

  return (
    <div>
      <Box>
        {/* {pcliste.map((v, i) => ( */}
        <div>
          <Box pb={"5%"} pt="3%">
            <Stack>
              <Select placeholder="Raum auswählen">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </Select>
              <Select placeholder="PC auswählen">
                {/* <option value="option1">{pcliste[i]}</option> */}
                <option value="option2">Option 2</option>
              </Select>
            </Stack>
          </Box>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>CPU</Th>
                  <Th>Graka</Th>
                  <Th>RAM</Th>
                  <Th>Motherboard</Th>
                  <Th>Festplatte</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>CPUBezeichnung</Td>
                  <Td>GrakaBezcihnugn</Td>
                  <Td>RAMbezeich</Td>
                  <Td>MBBezeichnun</Td>
                  <Td>FPBezeihcn</Td>
                </Tr>
                <Tr>
                  <Td>CPUBezeichnung</Td>
                  <Td>GrakaBezcihnugn</Td>
                  <Td>RAMbezeich</Td>
                  <Td>MBBezeichnun</Td>
                  <Td>FPBezeihcn</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </div>
        {/* ))} */}
      </Box>
    </div>
  );
}

export default Legende;
