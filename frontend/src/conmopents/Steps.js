import React from "react";
import { Box, Circle, Image } from "@chakra-ui/react";

function Steps() {
  return (
    <Box
      style={{
        position: "absolute",
        top: "1400px",
        textAlign: "center",
        left: "50%",
        transform: "translate(-50%)",
      }}
    >
      <p style={{marginTop:"70px", color: "#48d183", fontWeight: "600" }}>HOW TO RENT</p>
      <h1 style={{ color: "#3b396d", fontSize: "65px", marginTop: "10px" }}>
        Make 4 Simple Steps To
      </h1>
      <h1 style={{ color: "#3b396d", fontSize: "65px", marginTop: "-50px" }}>
        Rent a Car
      </h1>
      <p>
        Find car rentals at over 2900 locations in the country from TanTum local
        brand.
        <br /> It’s easy to rent a car!
      </p>
      <Box display="flex">
        <Box className="boxs">
          <Circle size="40px" bg="#48d183" color="white" ml="50px">
            1
          </Circle>
          <Image mt="20" h="80px" w="80" src="images/006_date.png" alt="img" />
          <h4
            style={{ colour: "#4d48bc", fontSize: "25px", marginTop: "10px" }}
          >
            Data & Location
          </h4>
          <p style={{ color: "#8e89a1", marginTop: "-20px" }}>
            Pick the location and the <br /> needed rent date.
          </p>
        </Box>
        {/* <span>&#8674;</span> */}
        <Box className="boxs">
          <Circle size="40px" bg="#48d183" color="white" ml="50px">
            2
          </Circle>
          <Image
            mt="20"
            h="80px"
            w="80"
            src="images/007_choose-a-car.png"
            alt="img"
          />
          <h4
            style={{ colour: "#4d48bc", fontSize: "25px", marginTop: "10px" }}
          >
            Choose A Car
          </h4>
          <p style={{ color: "#8e89a1", marginTop: "-20px" }}>
          Select the vehicle using our <br /> catalogues.
          </p>
        </Box>
        <Box className="boxs">
          <Circle size="40px" bg="#48d183" color="white" ml="50px">
            3
          </Circle>
          <Image
            mt="20"
            h="80px"
            w="80"
            src="images/008_passport.png"
            alt="img"
          />
          <h4
            style={{ colour: "#4d48bc", fontSize: "25px", marginTop: "10px" }}
          >
            Make A Booking
          </h4>
          <p style={{ color: "#8e89a1", marginTop: "-20px" }}>
          Enter your name and booking <br /> details.
          </p>
        </Box>
        <Box className="boxs">
          <Circle size="40px" bg="#48d183" color="white" ml="50px">
            4
          </Circle>
          <Image mt="20" h="80px" w="80" src="images/009_enjoy.png" alt="img" />
          <h4
            style={{ colour: "#4d48bc", fontSize: "25px", marginTop: "10px" }}
          >
            Enjoy Your Ride!
          </h4>
          <p style={{ color: "#8e89a1", marginTop: "-20px" }}>
          Enjoy your trip and our good <br /> service!
          </p>
        </Box>
      </Box>
    </Box>
  );
}

export default Steps;
