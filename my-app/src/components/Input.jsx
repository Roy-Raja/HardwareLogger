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
} from "@chakra-ui/react";
import React from "react";

const Screen = () => {
  return (
    <Center>
      <Box w="50%" p="4">
        <Stack>
          <Menu>
            <MenuButton as={Button}>Raum Nr.</MenuButton>
            <MenuList>
              <MenuItem>B123</MenuItem>
              <MenuItem>B124</MenuItem>
            </MenuList>
          </Menu>
          <InputGroup>
            <InputLeftAddon children="PC-Nummer:" />
            <Input />
          </InputGroup>
          <Menu>
            <MenuButton as={Button}>Motherboard</MenuButton>
            <MenuList>
              <MenuItem>B123</MenuItem>
              <MenuItem>B124</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton as={Button}>CPU</MenuButton>
            <MenuList>
              <MenuItem>19€</MenuItem>
              <MenuItem>i7</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton as={Button}>RAM</MenuButton>
            <MenuList>
              <MenuItem>B123</MenuItem>
              <MenuItem>B124</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton as={Button}>Grafikkarte</MenuButton>
            <MenuList>
              <MenuItem>760Gtx</MenuItem>
              <MenuItem>B124</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton as={Button}>Festplatte</MenuButton>
            <MenuList>
              <MenuItem>B123</MenuItem>
              <MenuItem>B124</MenuItem>
            </MenuList>
          </Menu>
        </Stack>
        <Button></Button>
      </Box>
    </Center>
  );
};

export default Screen;
