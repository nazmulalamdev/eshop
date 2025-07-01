import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { Bounce, toast } from "react-toastify";

const PriceRange = () => {
  let [minValue, setMinValue] = useState(10);
  let [maxValue, setMaxValue] = useState(3000);
  const updateSlider = (type, value) => {
    const parseValue = parseInt(value);

    if (parseValue > 5000 || parseValue < 0) {
      if (type == "min") {
        setMinValue(0);
      } else {
        setMaxValue(5000);
      }
      toast.warn("Min and Max value must be in between 0 to 1000!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return;
    }

    // const newMin = Math.min(parseValue, maxValue);
    // setMinValue(newMin);

    if (isNaN(parseValue)) return;

    if (type == "min") {
      if (parseValue > maxValue) {
        setMinValue(maxValue);
      } else {
        setMinValue(parseValue);
        return;
      }
    } else {
      if (parseValue < minValue) {
        setMaxValue(minValue);
      } else {
        setMaxValue(parseValue);
      }
    }
  };

  const minPercent = (minValue / 5000) * 100;
  const maxPercent = (maxValue / 5000) * 100;

  return (
    <>
      <div>
        <div className="flex items-center justify-between">
          <h3 className="font-['Montserrat'] font-bold text-[20px] text-[#303030]">
            Price
          </h3>
          <span>
            <IoIosArrowUp size={16} />
          </span>
        </div>
        <div className="flex justify-between mt-6 font-['Montserrat'] font-regular text-base text-[#303030]">
          <div>
            <input
              type="number"
              min="0"
              max="1000"
              placeholder="$0"
              value={minValue}
              step={10}
              onChange={(e) => updateSlider("min", e.target.value)}
              className="py-[25px] px-[32px] rounded-[10px] border border-[#303030] text-center opacity-[50%]"
            />
          </div>
          <div>
            <input
              type="number"
              min="0"
              max="2000"
              placeholder="$3000"
              value={maxValue}
              step={10}
              onChange={(e) => updateSlider("max", e.target.value)}
              className="py-[25px] px-[32px] rounded-[10px] border border-[#303030] text-center opacity-[50%]"
            />
          </div>
        </div>
        <div className="relative w-full h-[2px] bg-[#303030] mt-[30px]">
          <div
            className="absolute h-full bg-[#FF624C] left-[10%] w-[20%]"
            style={{
              left: `${minPercent}%`,
              width: `${
                maxPercent - minPercent > 100 ? 100 : maxPercent - minPercent
              }%`,
            }}
          ></div>
          <input
            type="range"
            min={0}
            max={5000}
            value={minValue}
            step={10}
            onChange={(e) => updateSlider("min", e.target.value)}
            className="absolute w-full h-[2px] bg-transparent pointer-events-none appearance-none rounded z-10"
          />
          <input
            type="range"
            min={100}
            max={5000}
            value={maxValue}
            step={10}
            onChange={(e) => updateSlider("max", e.target.value)}
            className="absolute w-full h-[2px] bg-transparent pointer-events-none appearance-none rounded z-20"
          />
        </div>
      </div>
    </>
  );
};

export default PriceRange;
