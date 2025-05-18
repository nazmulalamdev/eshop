import React from "react";
import ProductLayout from "./commonLayout/ProductLayout";
import Container from "./commonLayout/Container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const FeaturedProduct = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <>
      <Container>
        <Slider {...settings}>
          {/* <div className="flex gap-1"> */}
          <ProductLayout
            percentTag={true}
            category="laptop"
            title="S21 Laptop Ultra HD LED Screen Feature 2023 ..."
            rating="5"
            totalRating="80"
            price="1,199.00"
            border={true}
            bg="transparent"
            stock={true}
            stockAmount="50"
          />
          <ProductLayout
            percentTag={false}
            category="phone"
            title="S21 Laptop Ultra HD LED Screen Feature 2023 ..."
            rating="4"
            totalRating="100"
            price="1,199.00"
            border={true}
            bg="transparent"
            stock={false}
            stockAmount="40"
          />
          <ProductLayout
            percentTag={false}
            category="audio"
            title="S21 Laptop Ultra HD LED Screen Feature 2023 ..."
            rating="3"
            totalRating="64"
            price="1,199.00"
            border={true}
            bg="transparent"
            stock={true}
            stockAmount="60"
          />
          <ProductLayout
            percentTag={false}
            category="camera"
            title="S21 Laptop Ultra HD LED Screen Feature 2023 ..."
            rating="2"
            totalRating="130"
            price="1,199.00"
            border={true}
            bg="transparent"
            stock={false}
            stockAmount="10"
          />
          <ProductLayout
            percentTag={false}
            category="television"
            title="S21 Laptop Ultra HD LED Screen Feature 2023 ..."
            rating="4"
            totalRating="20"
            price="1,199.00"
            border={true}
            bg="transparent"
            stock={true}
            stockAmount="20"
          />
          {/* </div> */}
        </Slider>
      </Container>
    </>
  );
};

export default FeaturedProduct;
