import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiMaximize2 } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const ProductDetailsSlider = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [image, setImage] = useState("");
  const [active, setActive] = useState(false);
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
      <div className="w-[53%]">
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
    </>
  );
};

export default ProductDetailsSlider;
