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
import { Link } from "react-router-dom";

export const Navbar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Box as="section" pb={{ base: "12", md: "24" }}>
      <Box as="nav" boxShadow={useColorModeValue("sm", "sm-dark")}>
        <Container py={{ base: "4", lg: "5" }}>
          <HStack spacing="10" justify="space-between">
            {isDesktop ? (
              <Flex justify="space-between" flex="1">
                <Box
                  as="button"
                  p={2}
                  color="white"
                  fontWeight="bold"
                  borderRadius="md"
                  bgGradient="linear(to-r, teal.500, green.500)"
                  _hover={{
                    bgGradient: "linear(to-r, red.500, yellow.500)",
                  }}
                >
                  <Link to="/Display">Display</Link>
                </Box>
                <Box
                  as="button"
                  p={2}
                  color="white"
                  fontWeight="bold"
                  borderRadius="md"
                  bgGradient="linear(to-r, red.500, yellow.500)"
                  _hover={{
                    bgGradient: "linear(to-r, teal.500, green.500)",
                  }}
                >
                  <Link to="/Input">Input</Link>
                </Box>
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
