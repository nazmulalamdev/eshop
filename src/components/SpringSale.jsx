import { FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Container from "./commonLayout/Container";
import ProductLayout from "./commonLayout/ProductLayout";
import { useEffect, useState } from "react";
import Button from "./Button";
import { TfiAngleRight } from "react-icons/tfi";

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
  const [timeLeft, setTimeLeft] = useState(calcutaleTimeLeft);

  function calcutaleTimeLeft() {
    const saleEndDate = new Date("Jun 3, 2025 10:00 PM +06").getTime();
    const now = new Date().getTime();
    const difference = saleEndDate - now;

    // const format = (num) => num.toString().padStart(2, "0");

    if (difference < 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calcutaleTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <>
      <div
        className=" mt-[80px] py-[64px]"
        style={{ background: "url('images/timmerbg.png')" }}
      >
        <Container>
          <div className="flex justify-between">
            <div className="max-w-[528px]">
              <h2 className=" mt-[171px] font-['Poppins'] font-bold text-[56px] text-[#303030]">
                Spring Sale
              </h2>
              <div className=" flex justify-center gap-6 mt-10 max-w-[420px] mb-[72px]">
                {/* <div>
                  <h2 className="flex gap-2  font-['Poppins'] font-semibold text-[36px] text-[#FF624C]">
                    {String(timeLeft.days).padStart(2, "0")}{" "}
                    <span className="ml-3">:</span>
                  </h2>
                  <span className="font-['Montserrat'] font-normal text-base text-[#303030] left-[58px]">
                    Days
                  </span>
                </div>
                <div>
                  <h2 className="font-['Poppins'] font-semibold text-[36px] text-[#FF624C]">
                    {String(timeLeft.hours).padStart(2, "0")}{" "}
                    <span className="ml-3">:</span>
                  </h2>
                  <span className="font-['Montserrat'] font-normal text-base text-[#303030] left-[58px]">
                    Hours
                  </span>
                </div>
                <div>
                  <h2 className="font-['Poppins'] font-semibold text-[36px] text-[#FF624C]">
                    {String(timeLeft.minutes).padStart(2, "0")}{" "}
                    <span className="ml-3">:</span>
                  </h2>
                  <span className="font-['Montserrat'] font-normal text-base text-[#303030]">
                    Minuts
                  </span>
                </div>
                <div className="mb-[72px] flex flex-col items-center">
                  <h2 className="font-['Poppins'] font-semibold text-[36px] text-[#FF624C]">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </h2>
                  <span className="font-['Montserrat'] font-normal text-base text-[#303030] left-[58px]">
                    Seconds
                  </span>
                </div> */}

                <div className="text-center">
                  <h2 className="text-[#E5735D] font-['Poppins'] text-4xl font-semibold">
                    {String(timeLeft.days).padStart(2, "0")}
                  </h2>
                  <p className="font-['Montserrat'] font-normal text-base text-[#303030] mt-2">
                    Days
                  </p>
                </div>

                <span className="text-[#E5735D] font-['Poppins'] text-4xl font-semibold">
                  :
                </span>

                <div className="text-center">
                  <h2 className="text-[#E5735D] font-['Poppins'] text-4xl font-semibold">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </h2>
                  <p className="font-['Montserrat'] font-normal text-base text-[#303030] mt-2">
                    Hours
                  </p>
                </div>

                <span className="text-[#E5735D] font-['Poppins'] text-4xl font-semibold">
                  :
                </span>

                <div className="text-center">
                  <h2 className="text-[#E5735D] font-['Poppins'] text-4xl font-semibold">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </h2>
                  <p className="font-['Montserrat'] font-normal text-base text-[#303030] mt-2">
                    Minutes
                  </p>
                </div>

                <span className="text-[#E5735D] font-['Poppins'] text-4xl font-semibold">
                  :
                </span>

                <div className="text-center">
                  <h2 className="text-[#E5735D] font-['Poppins'] text-4xl font-semibold">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </h2>
                  <p className="font-['Montserrat'] font-normal text-base text-[#303030] mt-2">
                    Seconds
                  </p>
                </div>
              </div>
              <Button text="Shop Now" />
            </div>
            <div className="max-w-[961px] relative px-[36px]">
              <Slider {...settings}>
                {/* <div className="flex gap-1"> */}
                <div className="max-w-[463px] px-3">
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
                <div className="max-w-[463px] px-3">
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
                <div className="max-w-[463px] px-3">
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
                <div className="max-w-[463px] px-3">
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
                <div className="max-w-[463px] px-3">
                  <ProductLayout
                    percentTag={false}
                    category="television"
                    title="S21 Laptop Ultra HD LED Screen Feature 2023 ..."
                    rating="4"
                    ratingColor="white"
                    totalRating="20"
                    price="1,199.00"
                    border="border-0"
                    bg="bg-[#D9D9D9]"
                    stock={true}
                    stockAmount="20"
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
