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
import { BsCart3 } from "react-icons/bs";
import { LuMinus, LuPlus } from "react-icons/lu";
import RelatedProduct from "../components/RelatedProduct";

const ProductDetailsPage = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [active, setActive] = useState(false);
  const [image, setImage] = useState("");
  let [quantity, setQuantity] = useState(1);
  let [review, setReview] = useState(false);
  let [description, setDescription] = useState(true);
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

  let handleQuantity = (type) => {
    if (type === "minus") {
      if (quantity > 0) {
        quantity--;
        setQuantity(quantity);
      }
    } else {
      quantity++;
      setQuantity(quantity);
    }
  };

  const handleDescription = () => {
    setDescription(true);
    setReview(false);
  };

  const handleReview = () => {
    setDescription(false);
    setReview(true);
  };

  return (
    <>
      <Container>
        <div className="mt-16">
          <div className="flex items-center gap-8 mb-12 text-common">
            <span className="relative after:absolute after:content-[''] after:w-[1px] after:h-[15px] after:bg-[#303030] after:top-1/2 after:-translate-y-1/2 after:-right-4">
              Home
            </span>
            <span className="relative after:absolute after:content-[''] after:w-[1px] after:h-[15px] after:bg-[#303030] after:top-1/2 after:-translate-y-1/2 after:-right-4">
              Computers & Tablets{" "}
            </span>
            <span className="relative after:absolute after:content-[''] after:w-[1px] after:h-[15px] after:bg-[#303030] after:top-1/2 after:-translate-y-1/2 after:-right-4">
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
          <div className="flex items-center gap-[30px] mb-[100px]">
            <div className="w-[54%]">
              <div className="flex items-center gap-12">
                <div className="flex items-center gap-6">
                  <div>
                    <DeliveryIcon />
                  </div>
                  <div>
                    <h6 className="font-['Montserrat'] font-bold text-base">
                      Free Shipping
                    </h6>
                    <p className="font-['Montserrat'] font-normal text-base">
                      Worldwide available
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div>
                    <SecurityIcon />
                  </div>
                  <div>
                    <h6 className="font-['Montserrat'] font-bold text-base">
                      100% Guaranteed
                    </h6>
                    <p className="font-['Montserrat'] font-normal text-base">
                      Receive product first
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div>
                    <ReturnIcon />
                  </div>
                  <div>
                    <h6 className="font-['Montserrat'] font-bold text-base">
                      Return Available
                    </h6>
                    <p className="font-['Montserrat'] font-normal text-base">
                      See return policy
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[44%]">
              <div className="flex items-center gap-[84px]">
                <div className="flex items-center">
                  <button
                    onClick={() => handleQuantity("minus")}
                    className="w-[56px] h-[56px] hover:bg-[#F4F4F4] flex items-center justify-center rounded-full cursor-pointer"
                  >
                    <LuMinus size={24} />
                  </button>
                  <input
                    type="text"
                    value={quantity}
                    className="text-center w-[180px] font-['Poppins'] font-semibold text-[36px] text-[#303030]"
                  />
                  <button
                    onClick={() => handleQuantity("plus")}
                    className="w-[56px] h-[56px] hover:bg-[#F4F4F4] flex items-center justify-center rounded-full cursor-pointer"
                  >
                    <LuPlus size={24} />
                  </button>
                </div>
                <div className="flex gap-4">
                  <Button text="Buy Now" />
                  <Button
                    text={<BsCart3 size={28} />}
                    bg="transparent"
                    border="1px solid #FF624C"
                    color="#FF624C"
                    paddingX="17px"
                    paddingY="17px"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-12">
              <h4
                className={`font-['Poppins'] font-semibold text-[24px] ${
                  description
                    ? "text-[#303030] border-b-4 border-solid border-[#FF624C]"
                    : "text-[#CBCBCB]"
                } cursor-pointer pb-2`}
                onClick={handleDescription}
              >
                Description
              </h4>
              <h4
                className={`font-['Poppins'] font-semibold text-[24px] ${
                  review
                    ? "text-[#303030] border-b-4 border-solid border-[#FF624C]"
                    : "text-[#CBCBCB]"
                } cursor-pointer pb-2`}
                onClick={handleReview}
              >
                Reviews
              </h4>
            </div>
            {description && (
              <div className="mt-12 pb-10 flex gap-6 border-b border-solid border-[#CBCBCB]">
                <div className="w-[49%] font-[20px]">
                  <ul className="flex gap-[95px] mb-8">
                    <li className="w-[101px] font-['Poppins'] font-semibold">
                      Brand
                    </li>
                    <li className="font-['Montserrat'] font-normal">
                      NexSUS Tech Company
                    </li>
                  </ul>
                  <ul className="flex gap-[95px] mb-8">
                    <li className="w-[101px] font-['Poppins'] font-semibold">
                      Display
                    </li>
                    <li className="font-['Montserrat'] font-normal w-[430px]">
                      17.3-inch Full HD (1920 x 1080) IPS panel, 144Hz refresh
                      rate, 3ms response time, 100% sRGB color gamut,
                      Adaptive-Sync technology, anti-glare
                    </li>
                  </ul>
                  <ul className="flex gap-[95px] mb-8">
                    <li className="w-[101px] font-['Poppins'] font-semibold">
                      Processor
                    </li>
                    <li className="font-['Montserrat'] font-normal w-[430px]">
                      10th Gen Intel Core i9-10980HK (8 cores, 16 threads,
                      2.4GHz base clock speed, up to 5.3GHz turbo boost)
                    </li>
                  </ul>
                  <ul className="flex gap-[95px] mb-8">
                    <li className="w-[101px] font-['Poppins'] font-semibold">
                      Graphics
                    </li>
                    <li className="font-['Montserrat'] font-normal">
                      NVIDIA GeForce RTX 3080 (16GB GDDR6 VRAM)
                    </li>
                  </ul>
                  <ul className="flex gap-[95px] mb-8">
                    <li className="w-[101px] font-['Poppins'] font-semibold">
                      Memory
                    </li>
                    <li className="font-['Montserrat'] font-normal">
                      32GB DDR4-3200 RAM
                    </li>
                  </ul>
                  <ul className="flex gap-[95px]">
                    <li className="w-[101px] font-['Poppins'] font-semibold">
                      Storage
                    </li>
                    <li className="font-['Montserrat'] font-normal">
                      1TB PCIe NVMe M.2 SSD
                    </li>
                  </ul>
                </div>
                <div className="w-[49%] font-[20px]">
                  <ul className="flex gap-[69px] mb-8">
                    <li className="w-[119px] font-['Poppins'] font-semibold">
                      Audio
                    </li>
                    <li className="font-['Montserrat'] font-normal">
                      2 x 4W speakers with Smart Amp technology
                    </li>
                  </ul>
                  <ul className="flex gap-[69px] mb-8">
                    <li className="w-[119px] font-['Poppins'] font-semibold">
                      Connection
                    </li>
                    <li className="font-['Montserrat'] font-normal w-[480px]">
                      Wi-Fi 6 (802.11ax), Bluetooth 5.1, Gigabit Ethernet, HDMI
                      2.0b, USB 3.2 Gen 2 Type-C with DisplayPort 1.4 and Power
                      Delivery, 3 x USB 3.2 Gen 1 Type-A, 3.5mm audio
                    </li>
                  </ul>
                  <ul className="flex gap-[69px] mb-8">
                    <li className="w-[119px] font-['Poppins'] font-semibold">
                      Keyboard
                    </li>
                    <li className="font-['Montserrat'] font-normal w-[480px]">
                      Backlit Chiclet keyboard, N-key rollover, per-key RGB
                      lighting, Aura Sync technology
                    </li>
                  </ul>
                  <ul className="flex gap-[69px] mb-8">
                    <li className="w-[119px] font-['Poppins'] font-semibold">
                      Battery
                    </li>
                    <li className="font-['Montserrat'] font-normal">
                      4-cell 90Wh lithium battery (up to 8 hours battery life)
                    </li>
                  </ul>
                  <ul className="flex gap-[69px] mb-8">
                    <li className="w-[119px] font-['Poppins'] font-semibold">
                      Dimensions
                    </li>
                    <li className="font-['Montserrat'] font-normal">
                      15.7 x 11.1 x 1.0 inches (W x D x H)
                    </li>
                  </ul>
                  <ul className="flex gap-[69px]">
                    <li className="w-[119px] font-['Poppins'] font-semibold">
                      Weight
                    </li>
                    <li className="font-['Montserrat'] font-normal">
                      6.28 pounds
                    </li>
                  </ul>
                </div>
              </div>
            )}
            {review && <div className="w-full bg-green-500 mt-12">review</div>}
          </div>
          <RelatedProduct />
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
