import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Grid,
  GridItem,
  Box,
  Select,
  Button,
} from "@chakra-ui/react";

import React from "react";

function Form() {
  return (
    //   <Grid
    //     h="100%"
    //     templateRows="repeat(12, 1fr)"
    //     templateColumns="repeat(12, 1fr)"
    //     gap={5}
    //   >
    //     <GridItem colStart={1} colEnd={5} bg="red">
    //       1
    //     </GridItem>
    //     <GridItem colStart={5} colEnd={9} bg="red">
    //       2
    //     </GridItem>
    //     <GridItem colStart={9} colEnd={13} bg="red">
    //       3
    //     </GridItem>
    //     <GridItem colStart={1} colEnd={3} bg="red">4 </GridItem>
    //     <GridItem colStart={3} colEnd={5} bg="red">5 </GridItem>
    //     <GridItem colStart={5} colEnd={7} bg="red">6 </GridItem>
    //     <GridItem colStart={7} colEnd={9} bg="red">7 </GridItem>
    //     <GridItem colStart={9} colEnd={13} bg="red"> 8</GridItem>
    //   </Grid>
    <>
      <p style={{marginTop: '100px',color: "#48d183" }}>SEARCH FORM</p>
      <h1 style={{marginTop:'-10px' ,color: "white", fontSize: "70px" }}>Looking For a Car?</h1>
      <div className="contain" style={{ paddingBottom: '200px'}}>
        <div className="picupreturn">
          <select
            className="picupreturnlocation"
            style={{
              height: "60px",
              width: "430px",
              borderRadius: "30px",
              background: "#302d83",
              color: "#a091b3",
              border: "0px solid",
            }}
          >
            <option value="" disabled selected hidden>
              Pick-Up City & Location
            </option>
            <option value="option1">
              1. Car Rental Company - 625 2nd Street
            </option>
            <option value="option2">
              2. San Francisco - 625 2nd Street, San Francisco, CA 94107
            </option>
            <option value="option3">
              3. Los Angeles - 1 World Way, Los Angeles, CA 90045
            </option>
            <option value="option4">
              4. San Jose - 1701 Airport Blvd, San Jose, CA 95110
            </option>
          </select>
          <input
            className="picupreturndate"
            type="date"
            style={{
              height: "60px",
              width: "180px",
              borderRadius: "30px",
              background: "#302d83",
              color: "#a091b3",
            }}
          />

          <input
            className="picupreturntime"
            style={{
              height: "60px",
              width: "170px",
              borderRadius: "30px",
              background: "#302d83",
              color: "#a091b3",
            }}
            type="time"
          ></input>
        </div>

        <div className="picupreturn">
          <select
            className="picupreturnlocation"
            style={{
              height: "60px",
              width: "430px",
              borderRadius: "30px",
              background: "#302d83",
              color: "#a091b3",
            }}
          >
            <option value="" disabled selected hidden>
              Return City & Location:
            </option>
            <option value="option1">
              1. Car Rental Company - 625 2nd Street
            </option>
            <option value="option2">
              2. San Francisco - 625 2nd Street, San Francisco, CA 94107
            </option>
            <option value="option3">
              3. Los Angeles - 1 World Way, Los Angeles, CA 90045
            </option>
            <option value="option4">
              4. San Jose - 1701 Airport Blvd, San Jose, CA 95110
            </option>
          </select>

          <input
            className="picupreturndate"
            type="date"
            style={{
              height: "60px",
              width: "180px",
              borderRadius: "30px",
              background: "#302d83",
              color: "#a091b3",
            }}
          />

          <input
            className="picupreturntime"
            style={{
              height: "60px",
              width: "170px",
              borderRadius: "30px",
              background: "#302d83",
              color: "#a091b3",
            }}
            type="time"
          ></input>
        </div>

        <div className="classs">
          <select
            className="vclass"
            style={{
              height: "60px",
              width: "400px",
              borderRadius: "30px",
              background: "#302d83",
              color: "#a091b3",
            }}
          >
            <option value="" disabled selected hidden>
              Class:
            </option>
            <option value="option1">Compact</option>
            <option value="option2">Intermidiate</option>
            <option value="option3">SUV</option>
            <option value="option3">Station Wagon</option>
          </select>
          <Button
            h="60px"
            w="400px"
            bg="#48d183"
            color="white"
            borderWidth="1px"
            borderRadius="30px"
            transition="0.2s ease-in-out"
            _hover={{ bg: "#ffffff", color: "#302d83", cursor: "pointer" }}
          >
            Search
          </Button>
        </div>
      </div>
    </>
  );
}

export default Form;
