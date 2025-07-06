import React from "react";
import Container from "../components/commonLayout/Container";
import Counter from "../components/Counter";

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
          <span className="w-[49.34%]">PRODUCT</span>
          <span className="w-[16.50%]">PRICE</span>
          <span className="w-[16.50%]">QTY</span>
          <span className="w-[16.50%]">TOTAL</span>
        </div>
        <div className="mb-8 py-8 pl-9 pr-16 rounded-[15px] mt-7 flex items-center font-['Montserrat'] font-bold text-base text-[#303030]">
          <div className="w-[49.34%] flex gap-[62px] items-center">
            <img src="images/cart.png" alt="cartimg" />
            <div>
              <p>LAPTOP</p>
              <h3>
                2019 Smart Laptop 256 GB 13 inch Pro Chip Core 1 TB HD SSD
              </h3>
              <p>
                Variant: <span>Space Gray</span>
              </p>
            </div>
          </div>
          <span className="w-[16.50%]">$1,659.00</span>
          <span className="w-[16.50%]">
            <Counter />
          </span>
          <span className="w-[16.50%]">$1,659.00</span>
        </div>
      </Container>
    </>
  );
};

export default CartPage;
