import { IoIosArrowUp } from "react-icons/io";
import Container from "../components/commonLayout/Container";
import { useState } from "react";

const ProductListPage = () => {
  let [minValue, setMinValue] = useState(0);
  let [maxValue, setMaxValue] = useState(3000);

  const updateSlider = (type, value) => {
    if (type == "min") {
      const newMin = Math.min(parseInt(value), maxValue);
      setMinValue(newMin);
    } else {
      const newMax = Math.max(parseInt(value), minValue);
      setMaxValue(newMax);
    }
  };

  const minPercent = (minValue / 5000) * 100;
  const maxPercent = (maxValue / 5000) * 100;

  return (
    <>
      <Container>
        <div className="flex mt-16 mb-20">
          <div className="w-[355px] bg-[#F4F4F4] rounded-[25px] p-12">
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
                <span className="w-[124px] py-[25px] px-[32px] rounded-[10px] border border-[#303030] text-center">
                  $ {minValue}
                </span>
                <span className="w-[124px] py-[25px] px-[32px] rounded-[10px] border border-[#303030] text-center">
                  $ {maxValue}
                </span>
              </div>
              <div className="relative w-full h-[2px] bg-[#303030] mt-[30px]">
                <div
                  className="absolute h-full bg-[#FF624C] left-[10%] w-[20%]"
                  style={{
                    left: `${minPercent}%`,
                    width: `${maxPercent - minPercent}%`,
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
          </div>
          <div className="w-[80%]">
            right
            <input
              type="text"
              placeholder="$0"
              value={minValue}
              onChange={(e) => setMinValue(e.target.value)}
              className="px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 w-80"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProductListPage;
