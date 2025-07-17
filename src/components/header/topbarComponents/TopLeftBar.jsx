import React from "react";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const TopLeftBar = () => {
  return (
    <>
      <div className="flex items-center justify-center gap-7 sm:gap-12.5 relaltive after:content-[''] after:absolute after:w-[1px] sm:after:h-8 after:h-4 after:bg-[#BFBFBF] sm:after:left-[17%] after:right-[36%] sm:after:top-1/2 after:top-[10px] after:-translate-y-1/2 mb-3 sm:mb-0">
        <Link
          to="https://maps.app.goo.gl/y2pNKvRCn3pEGuxH8"
          className="flex items-center gap-2"
          target="_blank"
        >
          <IoLocationOutline size={16} className="hidden sm:block" /> 123 Main
          Street, Anytown USA
        </Link>
        <Link to="tel:1234567890" className="flex items-center gap-2">
          <IoCallOutline size={16} className="hidden sm:block" /> +1 (555)
          123-4567
        </Link>
      </div>
    </>
  );
};

export default TopLeftBar;
