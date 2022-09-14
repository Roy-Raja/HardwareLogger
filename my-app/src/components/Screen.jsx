import {
  Box,
  Select,
  Stack,
  Input,
  Center,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import React from "react";

const Screen = () => {
  return (
    <Center>
      <Box w="50%" p="4">
        <Stack>
          <Select placeholder="Raum Nr"></Select>
          <InputGroup>
            <InputLeftAddon children="PC-Nummer:" />
            <Input />
          </InputGroup>
          <Select placeholder="CPU"></Select>
        </Stack>
      </Box>
    </Center>
  );
};

export default Screen;
