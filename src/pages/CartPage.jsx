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
        <div>
          <div className="mb-8 py-8 pl-9 pr-16 rounded-[15px] mt-7 flex items-center font-['Montserrat'] font-bold text-base text-[#303030] group border border-transparent border:border hover:border-solid hover:border-red-400">
            <div className="w-[49.34%] flex gap-[62px] items-center">
              <img
                src="images/cart.png"
                alt="cartimg"
                className="w-[237px] h-[214px] object-cover"
              />
              <div>
                <p>LAPTOP</p>
                <h3 className="w-[314px] group-hover:text-red-500">
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
            <div className="w-[16.50%] flex items-center justify-between">
              <div>$1,659.00</div>
              <div>
                <span>d</span>
                <span>b</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CartPage;
