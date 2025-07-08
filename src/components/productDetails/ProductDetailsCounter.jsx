import React from "react";
import Button from "../Button";
import { FaStar } from "react-icons/fa";

const ProductDetailsCounter = () => {
  return (
    <>
      <div className="w-[45%]">
        <div className="flex items-center gap-1 mb-4">
          <FaStar className="text-[#FF624C]" />
          <FaStar className="text-[#FF624C]" />
          <FaStar className="text-[#FF624C]" />
          <FaStar className="text-[#FF624C]" />
          <FaStar className="text-[#FF624C]" />
          <span className="ml-1 text-common">( 142 )</span>
        </div>
        <h2 className="font-['Poppins'] font-semibold text-[36px] text-[#303030] border-[#CBCBCB] border-solid border-b pb-6 w-[631px]">
          NexSUS ROCK Strix Scar 17 Gaming Laptop 15.7” 1TB SSD 16GB RAM Pro
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
          <ul className="flex gap-[85px] mb-4">
            <li className="w-[83px] font-['Poppins'] font-semibold">Brand</li>
            <li className="font-['Montserrat'] font-normal">
              NexSUS Tech Company
            </li>
          </ul>
          <ul className="flex gap-[85px] mb-4">
            <li className="w-[83px] font-['Poppins'] font-semibold">Size</li>
            <li className="font-['Montserrat'] font-normal">
              15.7 x 11.1 x 1.0 inches (W x D x H)
            </li>
          </ul>
          <ul className="flex gap-[85px] mb-4">
            <li className="w-[83px] font-['Poppins'] font-semibold">Weight</li>
            <li className="font-['Montserrat'] font-normal">6.28 pounds</li>
          </ul>
          <ul className="flex gap-[85px] mb-4">
            <li className="w-[83px] font-['Poppins'] font-semibold">
              Delivery
            </li>
            <li className="font-['Montserrat'] font-normal">Worldwide</li>
          </ul>
          <ul className="flex gap-[85px]">
            <li className="w-[83px] font-['Poppins'] font-semibold">Variant</li>
            <li className="flex flex-wrap gap-[4px]">
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
    </>
  );
};

export default ProductDetailsCounter;
