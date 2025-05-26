import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";

const ProductLayout = ({
  percentTag,
  category,
  title,
  rating,
  totalRating,
  price,
  border,
  bg,
  stock,
  stockAmount,
  hover,
}) => {
  const [ratingValue, setReatingValue] = useState(
    new Array(+rating).fill(rating)
  );
  console.log(ratingValue);

  return (
    <>
      <div
        style={{ background: bg }}
        className="border border-transparent hover:border-[#C3C3C3] duration-300 p-6 group rounded-lg"
      >
        <div className="relative">
          <img
            className="w-full"
            src="images/productimg.png"
            alt="productimg"
          />
          {percentTag && (
            <div className="absolute top-[-8px] right-[-9px] py-[7px] px-[20px] bg-[#FF624C] rounded-[5px] font-['Montserrat'] font-bold text-base text-[#FFFFFF]">
              {percentTag}
            </div>
          )}
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
            {category}
          </p>
          <h3 className="font-['Poppins'] font-semibold text-xl text-['#303030'] leading-[30px] group-hover:text-[#FF624C] group-hover:underline duration-300">
            {title}
          </h3>
          <div className="flex items-center gap-2 text-[#FED550] mt-1 mb-6">
            {ratingValue.map((item, index) => (
              <FaStar key={index} />
            ))}
            <span className="font-['Montserrat'] font-normal text-base text-[#303030]">
              ( {totalRating} )
            </span>
          </div>
          <p className="font-['Poppins'] font-semibold text-2xl text-['#303030']">
            ${price}
          </p>
          {stock && (
            <div className="w-full h-[30px] bg-[#E0E0E0] rounded-[25px] mt-[32px] relative">
              <div className="w-1/2 h-[30px] bg-[#303030] rounded-[25px]">
                <p className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-white uppercase font-['Montserrat'] font-bold text-base">
                  {stockAmount} AVAILABLE
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductLayout;
