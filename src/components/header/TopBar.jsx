import React from "react";
import Container from "../commonLayout/Container";
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import TopLeftBar from "./topbarComponents/TopLeftBar";
import TopRightBar from "./topbarComponents/TopRightBar";

const TopBar = () => {
  return (
    <>
      <div className="border-b border-[#CCBFCC] border-solid py-[22px]">
        <Container>
          <div className="sm:flex sm:justify-between sm:items-center font-['Montserrat'] font-normal text-sm relative">
            <TopLeftBar />
            <TopRightBar />
          </div>
        </Container>
      </div>
    </>
  );
};

export default TopBar;
