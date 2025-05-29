import React from "react";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const TopLeftBar = () => {
  return (
    <>
      <div className="flex items-center gap-[50px] relaltive after:content-[''] after:absolute after:w-[1px] after:h-[32px] after:bg-[#BFBFBF] after:left-[17%] after:top-[50%] after:-translate-y-1/2">
        <Link
          to="https://maps.app.goo.gl/y2pNKvRCn3pEGuxH8"
          className="flex items-center gap-2"
          target="_blank"
        >
          <IoLocationOutline size={16} /> 123 Main Street, Anytown USA
        </Link>
        <Link to="tel:1234567890" className="flex items-center gap-2">
          <IoCallOutline size={16} /> +1 (555) 123-4567
        </Link>
      </div>
    </>
  );
};

export default TopLeftBar;
