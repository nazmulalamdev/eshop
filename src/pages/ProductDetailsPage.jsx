import React, { useEffect, useRef, useState } from "react";
import Container from "../components/commonLayout/Container";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiMaximize2 } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import Button from "../components/Button";
import ReturnIcon from "../icons/ReturnIcon";
import DeliveryIcon from "../icons/DeliveryIcon";
import SecurityIcon from "../icons/SecurityIcon";

const ProductDetailsPage = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [active, setActive] = useState(false);
  const [image, setImage] = useState("");
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const settingsothers = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  let handleClick = (url) => {
    console.log("click");
    setActive(true);
    setImage(url);
  };

  return (
    <>
      <Container>
        <div className="mt-16">
          <div className="flex items-center gap-[10px] mb-12 text-common">
            <span className="relative after:absolute after:content-[''] after:w-[1px] after:h-[15px] after:bg-[#303030] after:top-1/2 after:-translate-y-1/2 after:-right-[5px]">
              Home
            </span>
            <span className="relative after:absolute after:content-[''] after:w-[1px] after:h-[15px] after:bg-[#303030] after:top-1/2 after:-translate-y-1/2 after:-right-[5px]">
              Computers & Tablets{" "}
            </span>
            <span className="relative after:absolute after:content-[''] after:w-[1px] after:h-[15px] after:bg-[#303030] after:top-1/2 after:-translate-y-1/2 after:-right-[5px]">
              Laptop{" "}
            </span>
            <span className="font-bold">
              NexSUS ROCK Strix Scar 17 Gaming Laptop
            </span>
          </div>
          <div className="flex gap-[30px] mb-[63px]">
            <div className="w-[54%]">
              <div className="slider-container">
                <Slider
                  asNavFor={nav2}
                  ref={(slider) => (sliderRef1 = slider)}
                  {...settings}
                >
                  <div className="relative">
                    <img
                      className="relative w-[833px] h-[541px] rounded-[25px] object-cover"
                      src="images/product1.jpg"
                      alt="productimg"
                    />
                    <FiMaximize2
                      onClick={() => handleClick("images/product1.jpg")}
                      size={32}
                      className="absolute top-2 right-6 text-white cursor-pointer"
                    />
                  </div>
                  <div className="relative">
                    <img
                      className="w-[833px] h-[541px] rounded-[25px] object-cover"
                      src="images/product2.jpg"
                      alt="productimg"
                    />
                    <FiMaximize2
                      onClick={() => handleClick("images/product2.jpg")}
                      size={32}
                      className="absolute top-2 right-6 text-white cursor-pointer"
                    />
                  </div>
                  <div className="relative">
                    <img
                      className="w-[833px] h-[541px] rounded-[25px] object-cover"
                      src="images/product3.jpg"
                      alt="productimg"
                    />
                    <FiMaximize2
                      onClick={() => handleClick("images/product3.jpg")}
                      size={32}
                      className="absolute top-2 right-6 text-white cursor-pointer"
                    />
                  </div>
                  <div className="relative">
                    <img
                      className="w-[833px] h-[541px] rounded-[25px] object-cover"
                      src="images/product4.jpg"
                      alt="productimg"
                    />
                    <FiMaximize2
                      onClick={() => handleClick("images/product4.jpg")}
                      size={32}
                      className="absolute top-2 right-6 text-white cursor-pointer"
                    />
                  </div>
                </Slider>
              </div>
              <div className="w-[43%] mt-8">
                <Slider
                  asNavFor={nav1}
                  ref={(slider) => (sliderRef2 = slider)}
                  {...settingsothers}
                >
                  <div className="mr-[24px]">
                    <img
                      className="w-[94px] rounded-[10px] object-cover"
                      src="images/product1.jpg"
                      alt="productimg"
                    />
                  </div>

                  <div className="mr-[24px]">
                    <img
                      className="w-[94px] rounded-[10px] object-cover"
                      src="images/product2.jpg"
                      alt="productimg"
                    />
                  </div>

                  <div className="mr-[24px]">
                    <img
                      className="w-[94px] rounded-[10px] object-cover"
                      src="images/product3.jpg"
                      alt="productimg"
                    />
                  </div>

                  <div className="mr-[24px]">
                    <img
                      className="w-[94px] rounded-[10px] object-cover"
                      src="images/product4.jpg"
                      alt="productimg"
                    />
                  </div>
                </Slider>
              </div>
            </div>
            <div className="w-[44%]">
              <div className="flex items-center gap-1 mb-4">
                <FaStar className="text-[#FF624C]" />
                <FaStar className="text-[#FF624C]" />
                <FaStar className="text-[#FF624C]" />
                <FaStar className="text-[#FF624C]" />
                <FaStar className="text-[#FF624C]" />
                <span className="ml-1 text-common">( 142 )</span>
              </div>
              <h2 className="font-['Poppins'] font-semibold text-[36px] text-[#303030] border-[#CBCBCB] border-solid border-b pb-6">
                NexSUS ROCK Strix Scar 17 Gaming Laptop 15.7” 1TB SSD 16GB RAM
                Pro
              </h2>
              <div className="flex items-center gap-[17px] mt-6">
                <h3 className="font-['Poppins'] font-bold text-[56px] text-[#FF624C]">
                  $2,999.99
                </h3>
                <small className="font-['Montserrat'] font-normal text-[20px] text-[#979797]">
                  <del>$5,499.99</del>
                </small>
              </div>
              <div className="text-[20px] text-[#303030] mt-12">
                <ul className="flex gap-[87px] mb-4">
                  <li className="w-[83px] font-['Poppins'] font-semibold">
                    Brand
                  </li>
                  <li className="font-['Montserrat'] font-normal">
                    NexSUS Tech Company
                  </li>
                </ul>
                <ul className="flex gap-[87px] mb-4">
                  <li className="w-[83px] font-['Poppins'] font-semibold">
                    Size
                  </li>
                  <li className="font-['Montserrat'] font-normal">
                    15.7 x 11.1 x 1.0 inches (W x D x H)
                  </li>
                </ul>
                <ul className="flex gap-[87px] mb-4">
                  <li className="w-[83px] font-['Poppins'] font-semibold">
                    Weight
                  </li>
                  <li className="font-['Montserrat'] font-normal">
                    6.28 pounds
                  </li>
                </ul>
                <ul className="flex gap-[87px] mb-4">
                  <li className="w-[83px] font-['Poppins'] font-semibold">
                    Delivery
                  </li>
                  <li className="font-['Montserrat'] font-normal">Worldwide</li>
                </ul>
                <ul className="flex gap-[87px]">
                  <li className="w-[83px] font-['Poppins'] font-semibold">
                    Variant
                  </li>
                  <li className="flex flex-wrap gap-1">
                    <Button
                      text="Off White"
                      paddingX="32px"
                      bg="transparent"
                      border="1px solid #979797"
                      color="#303030"
                    />
                    <Button
                      text="Space Gray"
                      paddingX="32px"
                      bg="transparent"
                      border="1px solid #FFB0A5"
                      color="#FF624C"
                    />
                    <Button
                      text="Jet Black"
                      paddingX="32px"
                      bg="transparent"
                      border="1px solid #979797"
                      color="#303030"
                    />
                    <Button
                      text="Cinnamon Red"
                      paddingX="32px"
                      bg="transparent"
                      border="1px solid #CBCBCB"
                      color="#CBCBCB"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex gap-[30px]">
            <div className="w-[54%]">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-6">
                  <div>
                    <SecurityIcon />
                  </div>
                  <div>
                    <h6 className="font-['Montserrat'] font-bold text-base">
                      Secure
                    </h6>
                    <p className="font-['Montserrat'] font-normal text-base">
                      Certified marketplace since 2017
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div>
                    <DeliveryIcon />
                  </div>
                  <div>
                    <h6 className="font-['Montserrat'] font-bold text-base">
                      Shipping
                    </h6>
                    <p className="font-['Montserrat'] font-normal text-base">
                      Free, fast, and reliable worldwide
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div>
                    <ReturnIcon />
                  </div>
                  <div>
                    <h6 className="font-['Montserrat'] font-bold text-base">
                      Transparent
                    </h6>
                    <p className="font-['Montserrat'] font-normal text-base">
                      Hassle-free return policy
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[44%]">alam</div>
          </div>
          {active && (
            <div className="fixed top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.5)] flex items-center justify-center">
              <img src={image} alt="productimg" />
              <IoClose
                size={32}
                className="absolute top-[10px] right-[10px] cursor-pointer text-white"
                onClick={() => setActive(false)}
              />
            </div>
          )}
        </div>
      </Container>
    </>
  );
};

export default ProductDetailsPage;
