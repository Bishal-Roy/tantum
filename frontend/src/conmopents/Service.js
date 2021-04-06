import { Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import React from "react";

function Service() {
  return (
    <Box
      className="service"
      style={{ position: "absolute", top: "2250px", textAlign: "center" }}
    >
      <p style={{ marginTop: "200px", color: "#48d183", fontWeight: "500px" }}>
        GET A FIRST-TIME 10% DISCOUNT
      </p>
      <h1 style={{ fontSize: "70px", fontWeight: "800px", color: "#fff" }}>
        45,000 People Use <br /> TanTum Service{" "}
      </h1>
      <p style={{ color: "#48d183", fontWeight: "500px", fontSize: "20px" }}>
        {" "}
        Contact us now via our website & get a first-time <br /> 10% discount
        and enjoy it!{" "}
      </p>
      <Button
        bg="#3d3997"
        w="200px"
        h="60px"
        style={{ borderRadius: "30px", border: "none",color: "white" }}
        _hover={{ backgroundColor: "#48d183", cursor: "pointer"}}
      >
        Contact Us Now
      </Button>
    </Box>
  );
}

export default Service;
