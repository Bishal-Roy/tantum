import React from "react";
import { Box, Center, Icon, Image, Stack } from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <Box position="absolute" mt="4750px" w="100%">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        h="500px"
        className="happyclient"
      >
        <h1
          className="ti"
          style={{
            color: "#eeeeee",
            fontSize: "80px",
            marginRight: "20px",
            fontWeight: "bold",
          }}
        >
          98%
        </h1>
        <h3 style={{ width: "500px", color: "#3d3997", fontWeight: "bold" }}>
          of all our clients were happy to use our services and would have us
          back
        </h3>
      </Box>
      <Box display="flex" justifyContent="center">
        <Box w="15%" my="200px">
          <Image
            src="http://tantum.ancorathemes.com/wp-content/uploads/2019/01/logo1.png"
            alt="img"
          />
          <p style={{ width: "180px" }}>
            With so many options for rental service, you must choose the best
            company. We give you a wide range of quality rides!
          </p>
          <Stack isInline spacing="5px" align="center">
            <Center
              w="50px"
              h="50px"
              bg="#56de96"
              borderRadius="50px"
              transition="0.2s ease-in-out"
              color="#fff"
              _hover={{ bg: "#4d48bc", cursor: "pointer" }}
            >
              <Icon as={FaTwitter} />
            </Center>
            <Center
              w="50px"
              h="50px"
              bg="#56de96"
              borderRadius="50px"
              transition="0.2s ease-in-out"
              color="#fff"
              _hover={{ bg: "#4d48bc", cursor: "pointer" }}
            >
              <Icon as={FaFacebookF} />
            </Center>
            <Center
              w="50px"
              h="50px"
              bg="#56de96"
              borderRadius="50px"
              transition="0.2s ease-in-out"
              color="#fff"
              _hover={{ bg: "#4d48bc", cursor: "pointer" }}
            >
              <Icon as={FaInstagram} />
            </Center>
          </Stack>
        </Box>
        <Box w="15%" my="170px" mr="20px">
          <h1>Discover</h1>
          <p
            className="hoverchange"
            style={{ borderBottom: "2px solid #eeeeee" }}
          >
            News & Updates
          </p>
          <p
            className="hoverchange"
            style={{ borderBottom: "2px solid #eeeeee" }}
          >
            Low-Cost Rent
          </p>
          <p
            className="hoverchange"
            style={{ borderBottom: "2px solid #eeeeee" }}
          >
            Rental Tips
          </p>
          <p
            className="hoverchange"
            style={{ borderBottom: "2px solid #eeeeee" }}
          >
            Car Adventures
          </p>
          <p
            className="hoverchange"
            style={{ borderBottom: "2px solid #eeeeee" }}
          >
            Insurance Cases
          </p>
          <p
            className="hoverchange"
            style={{ borderBottom: "2px solid #eeeeee" }}
          >
            Portfolio
          </p>
        </Box>
        <Box w="15%" my="170px" mr="20px">
          <h1>Customer Info</h1>
          <p
            className="hoverchange"
            style={{ borderBottom: "2px solid #eeeeee" }}
          >
            FAQs
          </p>
          <p
            className="hoverchange"
            style={{ borderBottom: "2px solid #eeeeee" }}
          >
            Our Features
          </p>
          <p
            className="hoverchange"
            style={{ borderBottom: "2px solid #eeeeee" }}
          >
            Our Benefits
          </p>
          <p
            className="hoverchange"
            style={{ borderBottom: "2px solid #eeeeee" }}
          >
            Rent a Car
          </p>
          <p
            className="hoverchange"
            style={{ borderBottom: "2px solid #eeeeee" }}
          >
            Insurance Cases
          </p>
          <p
            className="hoverchange"
            style={{ borderBottom: "2px solid #eeeeee" }}
          >
            Testimonials
          </p>
        </Box>
        <Box w="15%" my="170px">
          <h1>Contact Us</h1>
          <h4 style={{ color: "#56de96", fontSize: "20px" }}>OUR ADDRESS:</h4>
          <p className="hoverchange">4 Goldfield Rd. Honolulu, HI 96815</p>
          <h4 style={{ color: "#56de96", fontSize: "20px" }}>PHONE NUMBER:</h4>
          <p className="hoverchange">0 800 555 22 33, 0 811 777 81 91</p>
          <h4 style={{ color: "#56de96", fontSize: "20px" }}>EMAIL ADDRESS:</h4>
          <p className="hoverchange">yourmail@information.com</p>
        </Box>
      </Box>
      <Box h="100px" w="100%" bg="#4d48bc" textAlign='center'>
        <p style={{paddingTop:"50px" ,color: "#fff"}}> <span className="ana">AncoraThemes</span>  © 2021. All Rights Reserved.</p>
      </Box>
    </Box>
  );
}

export default Footer;
