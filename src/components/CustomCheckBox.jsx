import React from "react";
import { FaCheck } from "react-icons/fa";

const CustomCheckBox = ({ text, quantity = false }) => {
  return (
    <>
      <div>
        <label
          htmlFor={text}
          className="flex items-center gap-2 font-['Montserrat'] font-regular text-base text-[#303030]"
        >
          <input
            hidden
            id={text}
            type="checkbox"
            className="target-input border border-solid rounded-[2px]"
          />
          <div className="custom-check flex items-center justify-center">
            <span>
              <FaCheck size={8} className="text-white" />
            </span>
          </div>
          <div className="flex items-center justify-between w-full">
            <span>{text}</span>
            {quantity && <span>({quantity})</span>}
          </div>
        </label>
      </div>
    </>
  );
};

export default CustomCheckBox;
