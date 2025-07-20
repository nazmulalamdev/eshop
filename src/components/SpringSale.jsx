import { FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "./commonLayout/Container";
import ProductLayout from "./commonLayout/ProductLayout";
import { useEffect, useState } from "react";
import Button from "./Button";
import { TfiAngleRight } from "react-icons/tfi";
import Timmer from "./Timmer";

function SampleNextArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="absolute right-[-36px] top-1/2 -translate-y-1/2 z-10 bg-[#F4F4F4] border text-[#303030] rounded-full w-[72px] h-[72px] flex items-center justify-center cursor-pointer"
    >
      <TfiAngleRight size={28} />
    </div>
  );
}

const SpringSale = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 415,
        settings: {
          slidesToShow: 1,
          nextArrow: null,
        },
      },
    ],
  };
  return (
    <>
      <div
        className=" mt-10 py-8 sm:py-16"
        style={{ background: "url('images/timmerbg.png')" }}
      >
        <Container>
          <div className="sm:flex sm:justify-between px-2 sm:px-0">
            <div className="max-w-[528px]">
              <h2 className=" mt-0 sm:mt-[171px] font-['Poppins'] font-bold text-[56px] text-[#303030]">
                Spring Sale
              </h2>
              <Timmer />
              <Button text="Shop Now" />
            </div>
            <div className="sm:max-w-[961px] relative sm:px-9 mt-7 sm:mt-0">
              <Slider {...settings}>
                {/* <div className="flex gap-1"> */}
                <div className="sm:max-w-[463px] px-1 sm:px-3">
                  <ProductLayout
                    percentTag="50%"
                    category="laptop"
                    title="S21 Laptop Ultra HD LED Screen Feature 2023 ..."
                    rating="5"
                    ratingColor="white"
                    totalRating="80"
                    price="1,199.00"
                    border="border-0"
                    bg="bg-[#D9D9D9]"
                    stock={true}
                    stockAmount="50"
                    hover="hover:bg-white"
                    shape={"round"}
                    priceColor="yellow"
                    priceless="5,058.00"
                  />
                </div>
                <div className="sm:max-w-[463px] px-1 sm:px-3">
                  <ProductLayout
                    percentTag={false}
                    category="phone"
                    title="S21 Laptop Ultra HD LED Screen Feature 2023 ..."
                    rating="4"
                    ratingColor="white"
                    totalRating="100"
                    price="1,199.00"
                    border="border-0"
                    bg="bg-[#D9D9D9]"
                    stock={true}
                    stockAmount="40"
                    hover="hover:bg-white"
                    priceColor="yellow"
                  />
                </div>
                <div className="sm:max-w-[463px] px-1 sm:px-3">
                  <ProductLayout
                    percentTag="20%"
                    category="audio"
                    title="S21 Laptop Ultra HD LED Screen Feature 2023 ..."
                    rating="3"
                    ratingColor="white"
                    totalRating="64"
                    price="1,199.00"
                    border="border-0"
                    bg="bg-[#D9D9D9]"
                    stock={true}
                    stockAmount="60"
                    hover="hover:bg-white"
                    shape="round"
                    priceColor="yellow"
                    priceless="5,058.00"
                  />
                </div>
                <div className="sm:max-w-[463px] px-1 sm:px-3">
                  <ProductLayout
                    percentTag={false}
                    category="camera"
                    title="S21 Laptop Ultra HD LED Screen Feature 2023 ..."
                    rating="2"
                    ratingColor="white"
                    totalRating="130"
                    price="1,199.00"
                    border="border-0"
                    bg="bg-[#D9D9D9]"
                    stock={true}
                    stockAmount="10"
                    hover="hover:bg-white"
                    priceColor="yellow"
                  />
                </div>

                {/* </div> */}
              </Slider>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default SpringSale;
