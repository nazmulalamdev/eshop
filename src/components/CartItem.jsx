import React from "react";
import Counter from "../components/Counter";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoShareSocialOutline } from "react-icons/io5";

const CartItem = ({ item, title, variant, price, total }) => {
  return (
    <>
      <div className="pt-6 pb-[56px] pl-9 pr-16 rounded-[15px]  flex items-center group border border-transparent border:border hover:border-solid hover:border-[#CBCBCB] hover:cursor-pointer">
        <div className="w-[49.34%] flex gap-[62px] items-center">
          <img
            src="images/cart.png"
            alt="cartimg"
            className="w-[237px] h-[214px] object-cover"
          />
          <div>
            <p className="leading-5 uppercase tracking-[5px] font-['Montserrat'] font-normal text-sm text-[#303030] mb-4">
              {item}
            </p>
            <h3 className="w-[314px] font-['Poppins'] font-semibold text-[20px] text-[#303030] mb-[46px] group-hover:text-[#FF624C]">
              {title}
            </h3>
            <p className="font-['Montserrat'] font-bold text-base text-[#303030]">
              Variant: <span className="font-normal ml-2">{variant}</span>
            </p>
          </div>
        </div>
        <span className="w-[16.50%] font-['Poppins'] font-semibold text-[20px] text-[#303030]">
          ${price}
        </span>
        <span className="w-[16.50%]">
          <Counter />
        </span>
        <div className="w-[16.50%] flex items-center justify-between">
          <div className="font-['Poppins'] font-semibold text-[20px] text-[#303030]">
            ${total}
          </div>
          <div className="flex flex-col gap-[38px]">
            <span className="text-[#FF624C] w-16 h-16 border border-solid border-[#FF624C] rounded-full flex items-center justify-center hover:bg-[#FF624C] hover:text-white">
              <RiDeleteBin6Line size={30} />
            </span>
            <span className="text-[#FF624C] w-16 h-16 border border-solid border-[#FF624C] rounded-full flex items-center justify-center hover:bg-[#FF624C] hover:text-white">
              <IoShareSocialOutline size={30} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
