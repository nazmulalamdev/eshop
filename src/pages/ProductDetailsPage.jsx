import React, { useEffect, useRef, useState } from "react";
import Container from "../components/commonLayout/Container";
import Button from "../components/Button";
import ReturnIcon from "../icons/ReturnIcon";
import DeliveryIcon from "../icons/DeliveryIcon";
import SecurityIcon from "../icons/SecurityIcon";
import { BsCart3 } from "react-icons/bs";
import { LuMinus, LuPlus } from "react-icons/lu";
import RelatedProduct from "../components/RelatedProduct";
import ProductDetailsSlider from "../components/productDetails/ProductDetailsSlider";
import Review from "../components/Review";
import ProductDetailsCounter from "../components/productDetails/ProductDetailsCounter";

const ProductDetailsPage = () => {
  let [quantity, setQuantity] = useState(1);

  let handleQuantity = (type) => {
    if (type === "minus") {
      if (quantity > 0) {
        quantity--;
        setQuantity(quantity);
      }
    } else {
      quantity++;
      setQuantity(quantity);
    }
  };

  return (
    <>
      <Container>
        <div className="mt-16">
          <div className="flex items-center gap-8 mb-12 text-common">
            <span className="relative after:absolute after:content-[''] after:w-[1px] after:h-[15px] after:bg-[#303030] after:top-1/2 after:-translate-y-1/2 after:-right-4">
              Home
            </span>
            <span className="relative after:absolute after:content-[''] after:w-[1px] after:h-[15px] after:bg-[#303030] after:top-1/2 after:-translate-y-1/2 after:-right-4">
              Computers & Tablets{" "}
            </span>
            <span className="relative after:absolute after:content-[''] after:w-[1px] after:h-[15px] after:bg-[#303030] after:top-1/2 after:-translate-y-1/2 after:-right-4">
              Laptop{" "}
            </span>
            <span className="font-bold">
              NexSUS ROCK Strix Scar 17 Gaming Laptop
            </span>
          </div>
          <div className="flex gap-[30px] mb-[63px]">
            <ProductDetailsSlider />
            <ProductDetailsCounter />
          </div>

          <div className="flex items-center gap-[30px] mb-[100px]">
            <div className="w-[54%]">
              <div className="flex items-center gap-12">
                <div className="flex items-center gap-6">
                  <div>
                    <DeliveryIcon />
                  </div>
                  <div>
                    <h6 className="font-['Montserrat'] font-bold text-base">
                      Free Shipping
                    </h6>
                    <p className="font-['Montserrat'] font-normal text-base">
                      Worldwide available
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div>
                    <SecurityIcon />
                  </div>
                  <div>
                    <h6 className="font-['Montserrat'] font-bold text-base">
                      100% Guaranteed
                    </h6>
                    <p className="font-['Montserrat'] font-normal text-base">
                      Receive product first
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div>
                    <ReturnIcon />
                  </div>
                  <div>
                    <h6 className="font-['Montserrat'] font-bold text-base">
                      Return Available
                    </h6>
                    <p className="font-['Montserrat'] font-normal text-base">
                      See return policy
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[44%]">
              <div className="flex items-center gap-[84px]">
                <div className="flex items-center">
                  <button
                    onClick={() => handleQuantity("minus")}
                    className="w-[56px] h-[56px] hover:bg-[#F4F4F4] flex items-center justify-center rounded-full cursor-pointer"
                  >
                    <LuMinus size={24} />
                  </button>
                  <input
                    type="text"
                    value={quantity}
                    className="text-center w-[180px] font-['Poppins'] font-semibold text-[36px] text-[#303030]"
                  />
                  <button
                    onClick={() => handleQuantity("plus")}
                    className="w-[56px] h-[56px] hover:bg-[#F4F4F4] flex items-center justify-center rounded-full cursor-pointer"
                  >
                    <LuPlus size={24} />
                  </button>
                </div>
                <div className="flex gap-4">
                  <Button text="Buy Now" />
                  <Button
                    text={<BsCart3 size={28} />}
                    bg="transparent"
                    border="1px solid #FF624C"
                    color="#FF624C"
                    paddingX="17px"
                    paddingY="17px"
                  />
                </div>
              </div>
            </div>
          </div>

          <Review />
          <RelatedProduct />
        </div>
      </Container>
    </>
  );
};

export default ProductDetailsPage;
