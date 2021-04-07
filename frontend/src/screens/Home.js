import { Circle } from "@chakra-ui/layout";
import React from "react";
import Carousel from "../conmopents/Carousel";
import CarRange from "../conmopents/CarRange";
import Download from "../conmopents/Download";
import Footer from "../conmopents/Footer";
import Navbar from "../conmopents/Navbar";
import Service from "../conmopents/Service";
import Steps from "../conmopents/Steps";
import Testimonials from "../conmopents/Testimonials";
import { FaAngleUp } from "react-icons/fa";
import Icon from "@chakra-ui/icon";

function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Steps />
      <Service />
      <CarRange />
      <Download />
      <Testimonials />
      <Footer />
      <Circle
        className="fixcircleicon"
        h="50px"
        w="50px"
        bg="#56DE96"
        position="fixed"
        right="40px"
        bottom="40px"
        color="#fff"
      >
        <Icon as={FaAngleUp}/>
      </Circle>
    </>
  );
}

export default Home;
