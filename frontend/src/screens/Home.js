import React from "react";
import Carousel from "../conmopents/Carousel";
import Navbar from "../conmopents/Navbar";
import Service from "../conmopents/Service";
import Steps from "../conmopents/Steps";

function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Steps />
      <Service/>
    </>
  );
}

export default Home;
