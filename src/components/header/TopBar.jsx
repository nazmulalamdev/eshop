import React from "react";
import Container from "../commonLayout/Container";
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";

const TopBar = () => {
  return (
    <>
      <div className="border-b border-[#BFBFBF] border-solid py-[22px]">
        <Container>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-[50px] font-['Montserrat'] font-normal text-sm relative after:content-[''] after:absolute after:w-[1px] after:h-[32px] after:bg-[#BFBFBF] after:left-[62%] after:top-[50%] after: -translate-y-1/2">
              <Link
                to="https://maps.app.goo.gl/y2pNKvRCn3pEGuxH8"
                className="flex items-center gap-2"
                target="_blank"
              >
                <IoLocationOutline /> 123 Main Street, Anytown USA
              </Link>
              <Link to="tel:1234567890" className="flex items-center gap-2">
                <IoCallOutline /> +1 (555) 123-4567
              </Link>
            </div>
            <div>Right</div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default TopBar;
