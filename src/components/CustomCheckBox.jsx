import React from "react";
import { FaCheck } from "react-icons/fa";

const CustomCheckBox = ({ text }) => {
  return (
    <>
      <div>
        <label htmlFor={text} className="flex items-center gap-2">
          <input hidden id={text} type="checkbox" className="target-input" />
          <div className="custom-check flex items-center justify-center">
            <span>
              <FaCheck size={8} className="text-white" />
            </span>
          </div>
          {text}
        </label>
      </div>
    </>
  );
};

export default CustomCheckBox;
