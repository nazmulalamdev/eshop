import React, { useState } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";

const Counter = () => {
  let [count, setCount] = useState(1);

  let handleClick = (type) => {
    if (type == "minus") {
      if (count >= 0) {
        count--;
        setCount(count);
      }
    } else {
      count++;
      setCount(count);
    }
  };
  return (
    <>
      <div className="flex items-center">
        <button onClick={() => handleClick("minus")} className="cursor-pointer">
          <LuMinus size={16} />
        </button>
        <input
          type="text"
          value={count}
          className="w-[40px] h-[40px] bg-[#F4F4F4] rounded-full mx-4 text-center font-['Montserrat'] font-bold text-base text-[#303030]"
        />
        <button onClick={() => handleClick("plus")} className="cursor-pointer">
          {" "}
          <LuPlus size={16} />
        </button>
      </div>
    </>
  );
};

export default Counter;
