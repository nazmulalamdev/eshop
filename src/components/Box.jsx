import React from "react";

const Box = ({ inputtype, placeholder, type }) => {
  return (
    <>
      <div>
        <label
          htmlFor=""
          className="font-['Montserrat'] font-semibold text-[20px] text-[#303030]"
        >
          {inputtype} <span className="text-[#FF624C]">*</span>
        </label>{" "}
        <br />
        {type == "textarea" ? (
          <textarea
            type="text"
            placeholder={placeholder}
            className="w-full px-8 py-[25px] border border-solid border-[#CBCBCB] rounded-[10px] mt-3"
          />
        ) : (
          <input
            type="text"
            placeholder={placeholder}
            className="w-full px-8 py-[25px] border border-solid border-[#CBCBCB] rounded-[10px] mt-3"
          />
        )}
      </div>
    </>
  );
};

export default Box;
