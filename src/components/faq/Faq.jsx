import React, { useState } from "react";
import Container from "../commonLayout/Container";
import ProductLayout from "../commonLayout/ProductLayout";
import { Link } from "react-router-dom";
import { CgArrowLongRight } from "react-icons/cg";
import AccordianItem from "./AccordianItem";
import Button from "../Button";
import { AccordianData } from "../../data/AccordianData";

const Faq = () => {
  let [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <div
        className="mt-[80px] py-20"
        style={{ background: "url('images/faqbg.png')" }}
      >
        <Container>
          <div className="sm:flex gap-28 px-2 sm:px-0">
            <div className="sm:w-[902px]">
              {AccordianData.map((item, index) => (
                <AccordianItem
                  key={index}
                  title={item.title}
                  content={item.content}
                  onToggle={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  isOpen={openIndex === index}
                />
              ))}
            </div>
            <div className="mt-75">
              <h2 className="max-w-[306px] font-['Poppins'] font-semibold text-[36px] text-[#303030] leading-[46px] mb-[24px]">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[392px] font-['Montserrat'] font-normal text-xl text-[#303030] mb-[64px]">
                Questions that get asked the most by our clients. Get any
                burning questions?
              </p>
              <Button text="Ask A Question" />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Faq;
