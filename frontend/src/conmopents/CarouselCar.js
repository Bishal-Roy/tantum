import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Circle } from "@chakra-ui/layout";
import React, { Component } from "react";
import Slider from "react-slick";
import { FaUserAlt, FaCashRegister, FaChair } from "react-icons/fa";
import Icon from "@chakra-ui/icon";

function CarouselCar() {


  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box w="60vw" ml='auto' mr='auto'>
      <Slider {...settings}>
        <Box bg="#fff" w='300px'>
          <Image
            ml="20px"
            mt="30"
            src="http://tantum.ancorathemes.com/wp-content/uploads/CarRentalGallery/thumb_car-15-copyright.jpg"
            style={{ position: "relative" }}
          ></Image>
          <Circle
            size="75px"
            bg="#4d48bc"
            color="white"
            ml="180px"
            mt="-175px"
            style={{ position: "absolute" }}
          >
            <p>
              <strong>$12</strong> <br /> per day
            </p>
          </Circle>
          <p>
            <span style={{fontWeight: "bold", color:'#9695b1'}}  >Volkswagen Golf</span>
            <br />
            Compact
          </p>
          <Button
            w="200px"
            h="40px"
            bg="#48d183"
            mb="30px"
            style={{ borderRadius: "30px", border: "none", color: "#fff" }}
            _hover={{ backgroundColor: "#4d48bc", cursor: "pointer" }}
          >
            View Details
          </Button>
          <Box borderTop="4px solid #eeeeee">
            <p>More Information:</p>
            <Box display="flex" style={{ justifyContent: "center" }}>
              <Circle
                size="60px"
                border="2px solid #4d48bc"
                m="5px"
                position="relative"
              >
                <Icon as={FaUserAlt} position="absolute" />
                <Circle
                  position="absolute"
                  size="25px"
                  color="#4d48bc"
                  bg="#fff"
                  ml="50px"
                  mb="-25px"
                  fontWeight="100px"
                >
                  <p>5</p>{" "}
                </Circle>
              </Circle>
              <Circle
                size="60px"
                border="2px solid #4d48bc"
                m="5px"
                position="relative"
              >
                <Icon as={FaCashRegister} position="absolute" />
                <Circle
                  position="absolute"
                  size="25px"
                  color="#4d48bc"
                  bg="#fff"
                  ml="50px"
                  mb="-25px"
                  fontWeight="100px"
                >
                  <p>M</p>{" "}
                </Circle>
              </Circle>
              <Circle
                size="60px"
                border="2px solid #4d48bc"
                m="5px"
                position="relative"
              >
                <Icon as={FaChair} position="absolute" />
                <Circle
                  position="absolute"
                  size="25px"
                  color="#4d48bc"
                  bg="#fff"
                  ml="50px"
                  mb="-25px"
                  fontWeight="100px"
                >
                  <p>4</p>{" "}
                </Circle>
              </Circle>
            </Box>
          </Box>
        </Box>



         <Box bg="#fff">
          <Image
            ml="20px"
            mt="30"
            src="http://tantum.ancorathemes.com/wp-content/uploads/CarRentalGallery/thumb_car-17-copyright.jpg"
            style={{ position: "relative" }}
          ></Image>
          <Circle
            size="75px"
            bg="#4d48bc"
            color="white"
            ml="180px"
            mt="-175px"
            style={{ position: "absolute" }}
          >
            <p>
              <strong>$12</strong> <br /> per day
            </p>
          </Circle>
          <p>
            <span style={{fontWeight: "bold", color:'#9695b1'}} >Infinity G25</span>
            <br />
            Compact
          </p>
          <Button
            w="200px"
            h="40px"
            bg="#48d183"
            mb="30px"
            style={{ borderRadius: "30px", border: "none", color: "#fff" }}
            _hover={{ backgroundColor: "#4d48bc", cursor: "pointer" }}
          >
            View Details
          </Button>
          <Box borderTop="4px solid #eeeeee">
            <p>More Information:</p>
            <Box display="flex" style={{ justifyContent: "center" }}>
              <Circle
                size="60px"
                border="2px solid #4d48bc"
                m="5px"
                position="relative"
              >
                <Icon as={FaUserAlt} position="absolute" />
                <Circle
                  position="absolute"
                  size="25px"
                  color="#4d48bc"
                  bg="#fff"
                  ml="50px"
                  mb="-25px"
                  fontWeight="100px"
                >
                  <p>4</p>{" "}
                </Circle>
              </Circle>
              <Circle
                size="60px"
                border="2px solid #4d48bc"
                m="5px"
                position="relative"
              >
                <Icon as={FaCashRegister} position="absolute" />
                <Circle
                  position="absolute"
                  size="25px"
                  color="#4d48bc"
                  bg="#fff"
                  ml="50px"
                  mb="-25px"
                  fontWeight="100px"
                >
                  <p>A</p>
                </Circle>
              </Circle>
              <Circle
                size="60px"
                border="2px solid #4d48bc"
                m="5px"
                position="relative"
              >
                <Icon as={FaChair} position="absolute" />
                <Circle
                  position="absolute"
                  size="25px"
                  color="#4d48bc"
                  bg="#fff"
                  ml="50px"
                  mb="-25px"
                  fontWeight="100px"
                >
                  <p>2</p>
                </Circle>
              </Circle>
            </Box>
          </Box>
        </Box>


        <Box bg="#fff">
          <Image
            ml="20px"
            mt="30"
            src="http://tantum.ancorathemes.com/wp-content/uploads/CarRentalGallery/thumb_car-18-copyright.jpg"
            style={{ position: "relative" }}
          ></Image>
          <Circle
            size="75px"
            bg="#4d48bc"
            color="white"
            ml="180px"
            mt="-175px"
            style={{ position: "absolute" }}
          >
            <p>
              <strong>$24</strong> <br /> per day
            </p>
          </Circle>
          <p>
            <span style={{fontWeight: "bold", color:'#9695b1'}} >Audi A3</span>
            <br />
            Compact
          </p>
          <Button
            w="200px"
            h="40px"
            bg="#48d183"
            mb="30px"
            style={{ borderRadius: "30px", border: "none", color: "#fff" }}
            _hover={{ backgroundColor: "#4d48bc", cursor: "pointer" }}
          >
            View Details
          </Button>
          <Box borderTop="4px solid #eeeeee">
            <p>More Information:</p>
            <Box display="flex" style={{ justifyContent: "center" }}>
              <Circle
                size="60px"
                border="2px solid #4d48bc"
                m="5px"
                position="relative"
              >
                <Icon as={FaUserAlt} position="absolute" />
                <Circle
                  position="absolute"
                  size="25px"
                  color="#4d48bc"
                  bg="#fff"
                  ml="50px"
                  mb="-25px"
                  fontWeight="100px"
                >
                  <p>5</p>{" "}
                </Circle>
              </Circle>
              <Circle
                size="60px"
                border="2px solid #4d48bc"
                m="5px"
                position="relative"
              >
                <Icon as={FaCashRegister} position="absolute" />
                <Circle
                  position="absolute"
                  size="25px"
                  color="#4d48bc"
                  bg="#fff"
                  ml="50px"
                  mb="-25px"
                  fontWeight="100px"
                >
                  <p>M</p>
                </Circle>
              </Circle>
              <Circle
                size="60px"
                border="2px solid #4d48bc"
                m="5px"
                position="relative"
              >
                <Icon as={FaChair} position="absolute" />
                <Circle
                  position="absolute"
                  size="25px"
                  color="#4d48bc"
                  bg="#fff"
                  ml="50px"
                  mb="-25px"
                  fontWeight="100px"
                >
                  <p>4</p>
                </Circle>
              </Circle>
            </Box>
          </Box>
        </Box> 






<Box bg="#fff">
          <Image
            ml="20px"
            mt="30"
            src="http://tantum.ancorathemes.com/wp-content/uploads/CarRentalGallery/thumb_car-14-copyright.jpg"
            style={{ position: "relative" }}
          ></Image>
          <Circle
            size="75px"
            bg="#4d48bc"
            color="white"
            ml="180px"
            mt="-175px"
            style={{ position: "absolute" }}
          >
            <p>
              <strong>$36</strong> <br /> per day
            </p>
          </Circle>
          <p>
            <span style={{fontWeight: "bold", color:'#9695b1'}} >Audi 07</span>
            <br />
            SUV
          </p>
          <Button
            w="200px"
            h="40px"
            bg="#48d183"
            mb="30px"
            style={{ borderRadius: "30px", border: "none", color: "#fff" }}
            _hover={{ backgroundColor: "#4d48bc", cursor: "pointer" }}
          >
            View Details
          </Button>
          <Box borderTop="4px solid #eeeeee">
            <p>More Information:</p>
            <Box display="flex" style={{ justifyContent: "center" }}>
              <Circle
                size="60px"
                border="2px solid #4d48bc"
                m="5px"
                position="relative"
              >
                <Icon as={FaUserAlt} position="absolute" />
                <Circle
                  position="absolute"
                  size="25px"
                  color="#4d48bc"
                  bg="#fff"
                  ml="50px"
                  mb="-25px"
                  fontWeight="100px"
                >
                  <p>5</p>{" "}
                </Circle>
              </Circle>
              <Circle
                size="60px"
                border="2px solid #4d48bc"
                m="5px"
                position="relative"
              >
                <Icon as={FaCashRegister} position="absolute" />
                <Circle
                  position="absolute"
                  size="25px"
                  color="#4d48bc"
                  bg="#fff"
                  ml="50px"
                  mb="-25px"
                  fontWeight="100px"
                >
                  <p>M</p>
                </Circle>
              </Circle>
              <Circle
                size="60px"
                border="2px solid #4d48bc"
                m="5px"
                position="relative"
              >
                <Icon as={FaChair} position="absolute" />
                <Circle
                  position="absolute"
                  size="25px"
                  color="#4d48bc"
                  bg="#fff"
                  ml="50px"
                  mb="-25px"
                  fontWeight="100px"
                >
                  <p>5</p>
                </Circle>
              </Circle>
            </Box>
          </Box>
        </Box>  




        
<Box bg="#fff">
          <Image
            ml="20px"
            mt="30"
            src="http://tantum.ancorathemes.com/wp-content/uploads/CarRentalGallery/thumb_car-16-copyright.jpg"
            style={{ position: "relative" }}
          ></Image>
          <Circle
            size="75px"
            bg="#4d48bc"
            color="white"
            ml="180px"
            mt="-175px"
            style={{ position: "absolute" }}
          >
            <p>
              <strong>$36</strong> <br /> per day
            </p>
          </Circle>
          <p>
            <span style={{fontWeight: "bold", color:'#9695b1'}} >Cadilac CTS</span>
            <br />
            Station Wagon
          </p>
          <Button
            w="200px"
            h="40px"
            bg="#48d183"
            mb="30px"
            style={{ borderRadius: "30px", border: "none", color: "#fff" }}
            _hover={{ backgroundColor: "#4d48bc", cursor: "pointer" }}
          >
            View Details
          </Button>
          <Box borderTop="4px solid #eeeeee">
            <p>More Information:</p>
            <Box display="flex" style={{ justifyContent: "center" }}>
              <Circle
                size="60px"
                border="2px solid #4d48bc"
                m="5px"
                position="relative"
              >
                <Icon as={FaUserAlt} position="absolute" />
                <Circle
                  position="absolute"
                  size="25px"
                  color="#4d48bc"
                  bg="#fff"
                  ml="50px"
                  mb="-25px"
                  fontWeight="100px"
                >
                  <p>5</p>{" "}
                </Circle>
              </Circle>
              <Circle
                size="60px"
                border="2px solid #4d48bc"
                m="5px"
                position="relative"
              >
                <Icon as={FaCashRegister} position="absolute" />
                <Circle
                  position="absolute"
                  size="25px"
                  color="#4d48bc"
                  bg="#fff"
                  ml="50px"
                  mb="-25px"
                  fontWeight="100px"
                >
                  <p>M</p>
                </Circle>
              </Circle>
              <Circle
                size="60px"
                border="2px solid #4d48bc"
                m="5px"
                position="relative"
              >
                <Icon as={FaChair} position="absolute" />
                <Circle
                  position="absolute"
                  size="25px"
                  color="#4d48bc"
                  bg="#fff"
                  ml="50px"
                  mb="-25px"
                  fontWeight="100px"
                >
                  <p>5</p>
                </Circle>
              </Circle>
            </Box>
          </Box>
        </Box> 

        <Box bg="#fff">
          <Image
            ml="20px"
            mt="30"
            src="http://tantum.ancorathemes.com/wp-content/uploads/CarRentalGallery/thumb_car-13-copyright.jpg"
            style={{ position: "relative" }}
          ></Image>
          <Circle
            size="75px"
            bg="#4d48bc"
            color="white"
            ml="180px"
            mt="-175px"
            style={{ position: "absolute" }}
          >
            <p>
              <strong>$36</strong> <br /> per day
            </p>
          </Circle>
          <p>
            <span style={{fontWeight: "bold", color:'#9695b1'}} >Lxus RX350</span>
            <br />
            Intermidiate
          </p>
          <Button
            w="200px"
            h="40px"
            bg="#48d183"
            mb="30px"
            style={{ borderRadius: "30px", border: "none", color: "#fff" }}
            _hover={{ backgroundColor: "#4d48bc", cursor: "pointer" }}
          >
            View Details
          </Button>
          <Box borderTop="4px solid #eeeeee">
            <p>More Information:</p>
            <Box display="flex" style={{ justifyContent: "center" }}>
              <Circle
                size="60px"
                border="2px solid #4d48bc"
                m="5px"
                position="relative"
              >
                <Icon as={FaUserAlt} position="absolute" />
                <Circle
                  position="absolute"
                  size="25px"
                  color="#4d48bc"
                  bg="#fff"
                  ml="50px"
                  mb="-25px"
                  fontWeight="100px"
                >
                  <p>5</p>{" "}
                </Circle>
              </Circle>
              <Circle
                size="60px"
                border="2px solid #4d48bc"
                m="5px"
                position="relative"
              >
                <Icon as={FaCashRegister} position="absolute" />
                <Circle
                  position="absolute"
                  size="25px"
                  color="#4d48bc"
                  bg="#fff"
                  ml="50px"
                  mb="-25px"
                  fontWeight="100px"
                >
                  <p>A</p>
                </Circle>
              </Circle>
              <Circle
                size="60px"
                border="2px solid #4d48bc"
                m="5px"
                position="relative"
              >
                <Icon as={FaChair} position="absolute" />
                <Circle
                  position="absolute"
                  size="25px"
                  color="#4d48bc"
                  bg="#fff"
                  ml="50px"
                  mb="-25px"
                  fontWeight="100px"
                >
                  <p>5</p>
                </Circle>
              </Circle>
            </Box>
          </Box>
        </Box> 
      </Slider>
    </Box>
  );
}

export default CarouselCar;
