import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";

export const Navbar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Box as="section" pb={{ base: "12", md: "24" }}>
      <Box
        as="nav"
        bg="bg-surface"
        boxShadow={useColorModeValue("sm", "sm-dark")}
      >
        <Container py={{ base: "4", lg: "5" }}>
          <HStack spacing="10" justify="space-between">
            {isDesktop ? (
              <Flex justify="space-between" flex="1">
                <HStack spacing="3">
                  <Button variant="ghost">Display</Button>
                  <Button variant="ghost">Input</Button>
                </HStack>
              </Flex>
            ) : (
              <IconButton variant="ghost" aria-label="Open Menu" />
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};
export default Navbar;
