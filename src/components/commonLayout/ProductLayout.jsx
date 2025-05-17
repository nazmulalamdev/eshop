import React from "react";
import { FaStar } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";

const ProductLayout = () => {
  return (
    <>
      <div className="border border-transparent hover:border-[#C3C3C3] duration-300 p-6 group rounded-lg mb-20">
        <div className="relative">
          <img src="images/productimg.png" alt="productimg" />
          <div className="absolute top-[-8px] right-[-9px] py-[7px] px-[20px] bg-[#FF624C] rounded-[5px] font-['Montserrat'] font-bold text-base text-[#FFFFFF]">
            50%
          </div>
          <div className="flex items-center absolute bottom-[6px] left-[48%] -translate-x-1/2 gap-5 scale-0 group-hover:scale-100 duration-300">
            <div className="w-[50px] h-[50px] bg-white rounded-full border border-[#FF624C] flex items-center justify-center text-[25px] text-[#FF624C] hover:text-white hover:bg-[#FF624C] duration-300 cursor-pointer">
              <MdOutlineShoppingCart />
            </div>
            <div className="w-[50px] h-[50px] bg-white rounded-full border border-[#FF624C] flex items-center justify-center text-[25px] text-[#FF624C] hover:text-white hover:bg-[#FF624C] duration-300 cursor-pointer">
              <IoMdHeartEmpty />
            </div>
            <div className="w-[50px] h-[50px] bg-white rounded-full border border-[#FF624C] flex items-center justify-center text-[25px] text-[#FF624C] hover:text-white hover:bg-[#FF624C] duration-300 cursor-pointer">
              <IoShareSocialOutline />
            </div>
          </div>
        </div>
        <div>
          <p className="font-['Montserrat'] font-normal text-sm text-['#303030'] leading-5 uppercase tracking-[5px] mt-12 mb-4">
            LAPTOP
          </p>
          <h3 className="font-['Poppins'] font-semibold text-xl text-['#303030'] leading-[30px] group-hover:text-[#FF624C] group-hover:underline duration-300">
            S21 Laptop Ultra HD LED Screen Feature 2023 ...
          </h3>
          <div className="flex items-center gap-2 text-[#FED550] mt-1 mb-6">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <span className="font-['Montserrat'] font-normal text-base text-[#303030]">
              ( 100 )
            </span>
          </div>
          <p className="font-['Poppins'] font-semibold text-2xl text-['#303030']">
            $1,199.00
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductLayout;
