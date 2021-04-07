import React from 'react'
import {Box} from '@chakra-ui/react'
import CarouselCar from "./CarouselCar"

function CarRange() {
    return (
        <Box bg='#eeeeee' w='100%' pb='150px' style={{position:'absolute', top:'3030px',textAlign: "center"}}>
            <p style={{ color:'#8ed183', marginTop:"100px"}}>WHAT WE OFFER</p>
            <h1 style={{ color:'#3b396d' , fontSize:'70px', marginTop:'10px' }}>Explore the Car Range</h1>
            <CarouselCar />
        </Box>
    )
}

export default CarRange
