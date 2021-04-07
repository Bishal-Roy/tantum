import React from "react";
import { Box, Button, Icon, Image } from "@chakra-ui/react";
import { AiOutlineApple } from "react-icons/ai";
import { IoLogoGooglePlaystore } from "react-icons/io5";

function Download() {
  return (
    <Box
      h="900px"
      w="100%"
      position="absolute"
      mt="3000px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      style={{}}
    >
      <Box m="20px">
        <Image
          src="http://tantum.ancorathemes.com/wp-content/uploads/2019/06/img-23-copyright.png"
          alt="pic"
        />
      </Box>
      <Box m="20px">
        <p style={{ color: "#48d183", fontWeight: "bold" }}>DOWNLOAD OUR APP</p>
        <h1 style={{ color: "#3b396d", fontWeight: "bold", fontSize: "60px" }}>
          Use One Way <br /> Car Rental!
        </h1>
        <p style={{ color: "#929cb5" }}>
          We go with the fastest options only! Rent a car right away without
          <br />
          having to wait in long lines & filling the paperwork, and receive it
          <br />
          within 60 minutes. This is the most efficient and elegant way of
          <br /> doing car rent business!
        </p>
        <Box>
          <Button
            w="200px"
            mr="5px"
            borderRadius="30px"
            bg="#48d183"
            border="none"
            color="#fff"
            _hover={{ backgroundColor: "#4d48bc", cursor: "pointer" }}
          >
            <Icon as={AiOutlineApple} w='40px' h='40px' />
            <p>
              Download on the <br /> <span style={{ fontSize:"20px"}}>Apple Store</span>
            </p>
          </Button>
          <Button
            w="200px"
            ml="5px"
            borderRadius="30px"
            border="none"
            _hover={{ backgroundColor: "#3b396d", cursor: "pointer", color: "#fff"}}
          >
            <Icon as={IoLogoGooglePlaystore} w='40px' h='40px' />
            <p>
              GET IT ON <br /> <span style={{ fontSize:"20px"}}>Google Play</span>
            </p>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Download;
