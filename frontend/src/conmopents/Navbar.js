import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

import {
  Box,
  Center,
  Flex,
  Image,
  Menu,
  Spacer,
  Stack,
  Icon,
} from "@chakra-ui/react";

function Navbar() {
  return (
    <Menu>
      <Flex py="35px" px="70px">
        <Box align="center">
          <Image src="images/logo1.webp" />
        </Box>
        <Spacer />
        <Stack
          isInline
          spacing="5px"
          align="center"
          fontSize="100%"
          fontWeight="600"
        >
          <Box
            px="15px"
            py="10px"
            borderWidth="1px"
            borderRadius="20px"
            transition="0.2s ease-in-out"
            _hover={{ bg: "#48d183", color: "#fff", cursor: "pointer" }}
          >
            Home
          </Box>
          <Box
            px="15px"
            py="10px"
            borderWidth="1px"
            borderRadius="20px"
            transition="0.2s ease-in-out"
            _hover={{ bg: "#48d183", color: "#fff", cursor: "pointer" }}
          >
            <span> Features </span>
          </Box>
          <Box
            px="15px"
            py="10px"
            borderWidth="1px"
            borderRadius="20px"
            transition="0.2s ease-in-out"
            _hover={{ bg: "#48d183", color: "#fff", cursor: "pointer" }}
          >
            <span> About Us </span>
          </Box>
          <Box
            px="15px"
            py='10px'
            borderWidth="1px"
            borderRadius="20px"
            transition="0.2s ease-in-out"
            _hover={{ bg: "#48d183", color: "#fff", cursor: "pointer" }}
          >
            <span> Rent a Car </span>
          </Box>
          <Box
            px="15px"
            py="10px"
            borderWidth="1px"
            borderRadius="20px"
            transition="0.2s ease-in-out"
            _hover={{ bg: "#48d183", color: "#fff", cursor: "pointer" }}
          >
            <span> News </span>
          </Box>
          <Box
            px="15px"
            py="10px"
            borderWidth="1px"
            borderRadius="20px"
            transition="0.2s ease-in-out"
            _hover={{ bg: "#48d183", color: "#fff", cursor: "pointer" }}
          >
            <span> Contacts </span>
          </Box>
        </Stack>
        <Spacer />
        <Stack isInline spacing="5px" align="center">
          <Center
            w="50px"
            h="50px"
            border="2px solid #4d48bc"
            borderRadius="50px"
            transition="0.2s ease-in-out"
            _hover={{ bg: "#4d48bc", cursor: "pointer", color: "#fff" }}
          >
            <Icon as={FaTwitter} />
          </Center>
          <Center
            w="50px"
            h="50px"
            border="2px solid #4d48bc"
            borderRadius="50px"
            transition="0.2s ease-in-out"
            _hover={{ bg: "#4d48bc", cursor: "pointer", color: "#fff" }}
          >
            <Icon as={FaFacebookF} />
          </Center>
          <Center
            w="50px"
            h="50px"
            border="2px solid #4d48bc"
            borderRadius="50px"
            transition="0.2s ease-in-out"
            _hover={{ bg: "#4d48bc", cursor: "pointer", color: "#fff" }}
          >
            <Icon as={FaInstagram} />
          </Center>
        </Stack>
      </Flex>
    </Menu>
  );
}

export default Navbar;
