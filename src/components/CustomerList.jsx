import React from "react";
import Container from "./commonLayout/Container";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CustomerList = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <>
      <div className="mt-[100px] mb-[100px]">
        <Container>
          {/* <div className="flex items-center justify-between mt-[100px] mb-[100px]"> */}
          <Slider {...settings}>
            <Link to={"#"}>
              <img src="images/customer1.png" alt="customerlogo" />
            </Link>
            <Link to={"#"}>
              <img src="images/customer2.png" alt="customerlogo" />
            </Link>
            <Link to={"#"}>
              <img src="images/customer3.png" alt="customerlogo" />
            </Link>
            <Link to={"#"}>
              <img src="images/customer4.png" alt="customerlogo" />
            </Link>
            <Link to={"#"}>
              <img src="images/customer5.png" alt="customerlogo" />
            </Link>
          </Slider>
          {/* </div> */}
        </Container>
      </div>
    </>
  );
};

export default CustomerList;
