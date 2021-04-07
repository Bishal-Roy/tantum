import React from "react";
import { Box, Image } from "@chakra-ui/react";

function Testimonials() {
  return (
    <Box
      position="absolute"
      mt="3900px"
      textAlign="center"
      w="100%"
      h="850px"
      bg="#3d3997"
    >
      <p style={{ color: "#48c58b", fontWeight: "bold", marginTop: "70px" }}>
        TESTIMONIALS
      </p>
      <h1
        style={{
          color: "#fff",
          fontSize: "70px",
          fontWeight: "bold",
          marginTop: "-20px",
        }}
      >
        Clients About Us
      </h1>

      <Box h="500px" display="flex" justifyContent="center" alignItems="center">
        <Box w="20vw" mx="10px">
          <Image
            src="http://tantum.ancorathemes.com/wp-content/uploads/2019/01/1test-copyright-150x150.jpg"
            borderRadius="50%"
          />
          <p style={{color:'#dddbe0' , fontSize:'20px', fontWeight:'bold'}}>
            “Very happy with the car, the service, the booster seat for my child
            and the friendly faces at the airport depot. I will use your
            friendly service again and recommend it to others. Thank you so
            much!”
          </p>
          <h1 style={{color:"#fff"}}>Mila Collier</h1>
          <p style={{color:'#48d183'}}>30 years</p>
        </Box>
        <Box w="20vw" mx="10px">
          <Image
            src="http://tantum.ancorathemes.com/wp-content/uploads/2019/01/3test-copyright-150x150.jpg"
            borderRadius="50%"
          />
          <p style={{color:'#dddbe0' , fontSize:'20px', fontWeight:'bold'}}>
            “I found the staff extremely helpful and gave excellent advice. We
            were delighted with the car and will not hesitate to return to you
            again. The trip to see my cousin was one of the reasons we stayed
            here, the car hire which enabled us to do this.”
          </p>
          <h1 style={{color:"#fff"}}>James Gordon</h1>
          <p style={{color:'#48d183'}}>30 years</p>
        </Box>
        <Box w="20vw" mx="10px">
          <Image
            src="http://tantum.ancorathemes.com/wp-content/uploads/2019/01/2test-copyright-150x150.jpg"
            borderRadius="50%"
          />
          <p style={{color:'#dddbe0' , fontSize:'20px', fontWeight:'bold'}}>
            Very efficient pick up & delivery back. Great staff and a very
            impressive vehicle (Mitsubishi Outlander). Great service when staff
            discovered glasses left behind in the car and recalled shuttle to
            pick them up.Thanks.
          </p>
          <h1 style={{color:"#fff"}}>Maisie Kaur</h1>
          <p style={{color:'#48d183'}}>32 years</p>
        </Box>
      </Box>
    </Box>
  );
}

export default Testimonials;
