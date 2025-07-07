import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const ProductListSidebar = ({ title, moreBrand = false, children }) => {
  const [isShow, setIsShow] = useState(true);
  return (
    <>
      <div className="mb-20 relative after:absolute after:w-full after:h-[1px] after:content-[''] after:bg-[#C3C3C3] after:left-0 after:-bottom-10">
        <div
          className="flex items-center justify-between mb-5 cursor-pointer"
          onClick={() => setIsShow(!isShow)}
        >
          <h4 className="font-['Montserrat'] font-bold text-xl">{title}</h4>
          <span>
            <IoIosArrowDown size={16} className={`${isShow && "rotate-180"}`} />
          </span>
        </div>
        {isShow && children}
        {moreBrand && (
          <div className="mt-5">
            <Link
              to="#"
              className="font-['Montserrat'] font-bold text-base text-[#303030] border-b border-b-[#303030] inline-block cursor-pointer"
            >
              More Brands
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductListSidebar;
