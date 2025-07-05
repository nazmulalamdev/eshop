import React from "react";
import Container from "../components/commonLayout/Container";

const CartPage = () => {
  return (
    <>
      <Container>
        <div className="flex items-center gap-8 mb-12 text-common mt-16">
          <span className="relative after:absolute after:content-[''] after:w-[1px] after:h-[15px] after:bg-[#303030] after:top-1/2 after:-translate-y-1/2 after:-right-4">
            Home
          </span>
          <span className="font-bold">Cart</span>
        </div>
        <h2 className="font-['Poppins'] font-bold text-[56px] text-[#303030] mt-12">
          Your Cart
        </h2>
        <div className="mb-8 py-8 px-[56px] bg-[#F4F4F4] rounded-[15px] mt-7 flex items-center font-['Montserrat'] font-bold text-base text-[#303030]">
          <span className="w-[40%]">PRODUCT</span>
          <span className="w-[20%]">PRICE</span>
          <span className="w-[20%]">QTY</span>
          <span className="w-[20%]">TOTAL</span>
        </div>
      </Container>
    </>
  );
};

export default CartPage;
