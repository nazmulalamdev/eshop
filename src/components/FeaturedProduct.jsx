import React from "react";
import ProductLayout from "./commonLayout/ProductLayout";
import Container from "./commonLayout/Container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { CgArrowLongRight } from "react-icons/cg";
import { Link } from "react-router-dom";

function SampleNextArrow({ onClick }) {
  // const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 border text-[#303030] rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
    >
      <FaChevronRight size={16} />
    </div>
    // <div
    //   className={className}
    //   style={{
    //     position: "absolute",
    //     ...style,
    //     display: "block",
    //     background: "red",
    //     width: "40px",
    //     height: "40px",
    //     borderRadius: "50%",
    //     top: "50%",
    //   }}
    //   onClick={onClick}
    // />
  );
}

function SamplePrevArrow({ onClick }) {
  // const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 border text-[#303030] rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
    >
      <FaChevronLeft />
    </div>
    // <div
    //   className={className}
    //   style={{ ...style, display: "block", background: "green" }}
    //   onClick={onClick}
    // />
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
      <div className="mt-[80px]">
        <Container>
          <div className="flex justify-between mb-[48px]">
            <div className="font-['Poppins'] font-semibold text-[36px] text-[#303030]">
              <h2>Featured Products</h2>
            </div>
            <div>
              <Link
                to={"#"}
                className="flex items-center gap-4 font-['Montserrat'] font-bold text-base text-[#303030] hover:text-[#FF624C]"
              >
                View All <CgArrowLongRight size={28} />
              </Link>
            </div>
          </div>
          <div className="relative">
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
                stock={false}
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
                stock={false}
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
                stock={false}
                stockAmount="20"
              />
              {/* </div> */}
            </Slider>
          </div>
        </Container>
      </div>
    </>
  );
};

export default FeaturedProduct;
