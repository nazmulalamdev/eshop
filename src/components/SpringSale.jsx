import { FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Container from "./commonLayout/Container";
import ProductLayout from "./commonLayout/ProductLayout";
import { useEffect, useState } from "react";
import Button from "./Button";

function SampleNextArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 border text-[#303030] rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
    >
      <FaChevronRight size={16} />
    </div>
  );
}

const SpringSale = () => {
  const [timeLeft, setTimeLeft] = useState(calcutaleTimeLeft);

  function calcutaleTimeLeft() {
    const saleEndDate = new Date("May 27, 2025 10:00 PM +06").getTime();
    const now = new Date().getTime();
    const difference = saleEndDate - now;

    const format = (num) => num.toString().padStart(2, "0");

    if (difference < 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
    return {
      days: format(Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: format(
        Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ),
      minutes: format(
        Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      ),
      seconds: format(Math.floor((difference % (1000 * 60)) / 1000)),
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
              <div className=" flex justify-between mt-10 max-w-[420px]">
                <div>
                  <h2 className="flex gap-2 font-['Poppins'] font-semibold text-[36px] text-[#FF624C]">
                    {timeLeft.days} <span className="ml-3">:</span>
                  </h2>
                  <span className="font-['Montserrat'] font-normal text-base text-[#303030] left-[58px]">
                    Days
                  </span>
                </div>
                <div>
                  <h2 className="font-['Poppins'] font-semibold text-[36px] text-[#FF624C]">
                    {timeLeft.hours} <span className="ml-3">:</span>
                  </h2>
                  <span className="font-['Montserrat'] font-normal text-base text-[#303030] left-[58px]">
                    Hours
                  </span>
                </div>
                <div>
                  <h2 className="font-['Poppins'] font-semibold text-[36px] text-[#FF624C]">
                    {timeLeft.minutes} <span className="ml-3">:</span>
                  </h2>
                  <span className="font-['Montserrat'] font-normal text-base text-[#303030]">
                    Minuts
                  </span>
                </div>
                <div className="mb-[72px] flex flex-col items-center">
                  <h2 className="font-['Poppins'] font-semibold text-[36px] text-[#FF624C]">
                    {timeLeft.seconds}
                  </h2>
                  <span className="font-['Montserrat'] font-normal text-base text-[#303030] left-[58px]">
                    Seconds
                  </span>
                </div>
              </div>
              <Button text="Shop Now" />
            </div>
            <div className="max-w-[961px] relative gap-5">
              <Slider {...settings}>
                {/* <div className="flex gap-1"> */}
                <div className="max-w-[463px]">
                  <ProductLayout
                    percentTag="50%"
                    category="laptop"
                    title="S21 Laptop Ultra HD LED Screen Feature 2023 ..."
                    rating="5"
                    totalRating="80"
                    price="1,199.00"
                    border={true}
                    bg="#D9D9D9"
                    stock={true}
                    stockAmount="50"
                  />
                </div>
                <div className="max-w-[463px]">
                  <ProductLayout
                    percentTag={false}
                    category="phone"
                    title="S21 Laptop Ultra HD LED Screen Feature 2023 ..."
                    rating="4"
                    totalRating="100"
                    price="1,199.00"
                    border={true}
                    bg="#D9D9D9"
                    stock={true}
                    stockAmount="40"
                  />
                </div>
                <div className="max-w-[463px]">
                  <ProductLayout
                    percentTag={false}
                    category="audio"
                    title="S21 Laptop Ultra HD LED Screen Feature 2023 ..."
                    rating="3"
                    totalRating="64"
                    price="1,199.00"
                    border={true}
                    bg="#D9D9D9"
                    stock={true}
                    stockAmount="60"
                  />
                </div>
                <div className="max-w-[463px]">
                  <ProductLayout
                    percentTag={false}
                    category="camera"
                    title="S21 Laptop Ultra HD LED Screen Feature 2023 ..."
                    rating="2"
                    totalRating="130"
                    price="1,199.00"
                    border={true}
                    bg="#D9D9D9"
                    stock={true}
                    stockAmount="10"
                  />
                </div>
                <div className="max-w-[463px]">
                  <ProductLayout
                    percentTag={false}
                    category="television"
                    title="S21 Laptop Ultra HD LED Screen Feature 2023 ..."
                    rating="4"
                    totalRating="20"
                    price="1,199.00"
                    border={true}
                    bg="#D9D9D9"
                    stock={true}
                    stockAmount="20"
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
