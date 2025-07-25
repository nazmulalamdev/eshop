import React from "react";
import { FaAngleRight } from "react-icons/fa";

const AccordianItem = ({ title, content, onToggle, isOpen }) => {
  return (
    <>
      <div
        onClick={onToggle}
        className="mb-6 last:mb-0 w-full p-3 bg-white text-left py-8 px-8 sm:px-16 rounded-[25px] font-['Poppins'] font-semibold text-[24px] text-[#303030] relative pl-14 sm:pl-28"
      >
        <div>
          <button className="text-left pl-3 sm:pl-0">
            <div
              className={`${
                isOpen
                  ? "bg-transparent  border border-[#FF624C] !text-[#FF624C] rotate-[90deg]"
                  : "bg-[#FF624C]"
              } absolute left-6 sm:left-12 top-8 duration-300 w-8 h-8 rounded-full  text-xl text-white flex items-center justify-center mr-4`}
            >
              <FaAngleRight />
            </div>
            {title}
          </button>
        </div>

        {isOpen && (
          <div className="font-['Montserrat'] font-normal text-xl text-[#303030] mt-4">
            {content}
          </div>
        )}
      </div>
    </>
  );
};

export default AccordianItem;
