import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const ProductListSidebar = ({ children }) => {
  const [isShow, setIsShow] = useState(true);
  return (
    <>
      <div className="mb-20">
        <div
          className="flex items-center justify-between mb-5 cursor-pointer"
          onClick={() => setIsShow(!isShow)}
        >
          <h4 className="font-['Montserrat'] font-bold text-xl">Categories</h4>
          <span>
            <IoIosArrowDown size={16} className={`${isShow && "rotate-180"}`} />
          </span>
        </div>
        {isShow && children}
      </div>
    </>
  );
};

export default ProductListSidebar;
