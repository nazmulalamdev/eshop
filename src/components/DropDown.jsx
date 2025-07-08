import React, { useState } from "react";
import { DropDownData } from "../data/DropDownData";

const DropDown = ({ title, inputtype, star, type }) => {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div>
        <label
          htmlFor=""
          className="font-['Montserrat'] font-semibold text-[20px] text-[#303030]"
        >
          {title} {star && <span className="text-[#FF624C]">*</span>}
        </label>
        <select
          value={selected?.id}
          className="w-full px-8 py-[25px] border border-solid border-[#CBCBCB] rounded-[10px] mt-3 font-['Montserrat'] font-normal text-[20px] text-[#303030]"
          onChange={(e) => {
            const country = DropDownData.find((c) => c.id == e.target.value);
            setSelected(country);
          }}
        >
          <option value="">---{inputtype}---</option>
          {type == "country" &&
            DropDownData.map((item, index) => (
              <option key={index}>{item.label}</option>
            ))}

          {type == "city" &&
            DropDownData.map((item, index) => (
              <option key={index}>{item.city}</option>
            ))}
          {type == "state" &&
            DropDownData.map((item, index) => (
              <option key={index}>{item.state}</option>
            ))}
          {type == "zip" &&
            DropDownData.map((item, index) => (
              <option key={index}>{item.zip}</option>
            ))}
        </select>
      </div>
    </>
  );
};

export default DropDown;
