import React, { useEffect, useState } from "react";

const Timmer = () => {
  const [timeLeft, setTimeLeft] = useState(calcutaleTimeLeft);

  function calcutaleTimeLeft() {
    const saleEndDate = new Date("Jul 10, 2025 10:00 PM +06").getTime();
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

  return (
    <>
      <div className=" flex justify-center gap-6 mt-10 max-w-[420px] mb-[72px]">
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
    </>
  );
};

export default Timmer;
