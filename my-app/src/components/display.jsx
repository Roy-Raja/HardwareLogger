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
import React from "react";
import Axios from "axios";

const display = () => {
  return (
    <Box>
      <Stack>
        <Select placeholder="Raum auswählen">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </Select>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>PC</Th>
                <Th>CPU</Th>
                <Th>Graka</Th>
                <Th>RAM</Th>
                <Th>Motherboard</Th>
                <Th>Festplatte</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Nummer:</Td>
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
      </Stack>
    </Box>
  );
};

export default display;
