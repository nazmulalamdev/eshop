import React, { useState } from "react";
import Container from "../commonLayout/Container";
import ProductLayout from "../commonLayout/ProductLayout";
import { Link } from "react-router-dom";
import { CgArrowLongRight } from "react-icons/cg";
import AccordianItem from "./AccordianItem";
import Button from "../Button";

const Faq = () => {
  let [openIndex, setOpenIndex] = useState(null);
  let accordianData = [
    {
      title: "What payment methods do you accept?",
      content:
        "Absolutely! Once your order has been shipped, we'll send you a tracking number and a link to our carrier's website where you can track your package in real-time. You can also check the status of your order by logging into your account and viewing your order history.",
    },
    {
      title: "How long does the product shipping take?",
      content:
        "Absolutely! Once your order has been shipped, we'll send you a tracking number and a link to our carrier's website where you can track your package in real-time. You can also check the status of your order by logging into your account and viewing your order history.",
    },
    {
      title: "Do you offer international shipping?",
      content:
        "Absolutely! Once your order has been shipped, we'll send you a tracking number and a link to our carrier's website where you can track your package in real-time. You can also check the status of your order by logging into your account and viewing your order history.",
    },
    {
      title: "Can I track my order?",
      content:
        "Absolutely! Once your order has been shipped, we'll send you a tracking number and a link to our carrier's website where you can track your package in real-time. You can also check the status of your order by logging into your account and viewing your order history.",
    },
  ];
  return (
    <>
      <div
        className="mt-[80px] py-20"
        style={{ background: "url('images/faqbg.png')" }}
      >
        <Container>
          <div className="flex gap-[112px]">
            <div className="w-[902px]">
              {accordianData.map((item, index) => (
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
            <div className="mt-[300px]">
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
