import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Form from "./Form";
import { Box } from "@chakra-ui/layout";

// function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", background: "red" }}
//         onClick={onClick}
//       />
//     );
//   }

//   function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", background: "green" }}
//         onClick={onClick}
//       />
//     );
//   }

function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,

    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };
  return (
    <>
      <div className="carouselbg">
        <Slider {...settings}>
          <div className="carouselbg1">
            <div className="caraouseltext">
              <p
                style={{
                  color: "#42E187",
                  marginBottom: "-50px",
                  fontSize: "20px",
                }}
              >
                starting from $18 per day
              </p>
              <h1>Fast and Effective</h1>
              <h1 style={{ marginTop: "-70px" }}>Service</h1>
              <p style={{ marginTop: "-20px" }}>
                We let YOU pick the car that will ensure the best trip ever.
              </p>
              <p style={{ marginTop: "-10px" }}>
                Give us a shout and we'll get it ready for you!
              </p>
            </div>
          </div>
          <div className="carouselbg2">
            <div className="caraouseltext">
              <p
                style={{
                  color: "#42E187",
                  marginBottom: "-50px",
                  fontSize: "20px",
                }}
              >
                starting from $18 per day
              </p>
              <h1>Global Online</h1>
              <h1 style={{ marginTop: "-70px" }}>Car Rental</h1>

              <p style={{ marginTop: "-20px" }}>
                Order cars all over the world using our website service!
              </p>
              <p style={{ marginTop: "-10px" }}>
                We will make sure that you receive it on time.
              </p>
            </div>
          </div>
          <div className="carouselbg3">
            <div className="caraouseltext">
              <p
                style={{
                  color: "#42E187",
                  marginBottom: "-50px",
                  fontSize: "20px",
                }}
              >
                car rental service
              </p>
              <h1>Favorite Rental</h1>
              <h1 style={{ marginTop: "-70px" }}>Service</h1>
              <p style={{ marginTop: "-20px" }}>
                The Best Final Car Rental Rates! NO Hidden Extra Charges!
              </p>
              <p style={{ marginTop: "-10px" }}>
                Trusted by 7 million customers and counting!
              </p>
            </div>
          </div>
        </Slider>
      </div>
      <div className="searchform">
        <Form />
      </div>
    </>
  );
}
export default Carousel;
