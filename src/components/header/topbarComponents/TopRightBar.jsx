import React from "react";

const TopRightBar = () => {
  return (
    <>
      <div className="flex justify-end items-center gap-[49px]">
        <div>USD</div>
        <div className="relaltive after:content-[''] after:absolute after:w-[1px] after:h-[32px] after:bg-[#BFBFBF] after:right-[212px] after:top-[50%] after:-translate-y-1/2 before:content-[''] before:absolute before:w-[1px] before:h-[32px] before:bg-[#BFBFBF] before:right-[112px] before:top-[50%] before:-translate-y-1/2">
          <select name="" id="">
            <option value="">asd</option>
            <option value="">dfg</option>
            <option value="">wee</option>
            <option value="">qwe</option>
          </select>
        </div>
        <div>social Media</div>
      </div>
    </>
  );
};

export default TopRightBar;
