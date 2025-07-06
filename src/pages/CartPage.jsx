import React from "react";
import Container from "../components/commonLayout/Container";
import CartItem from "../components/CartItem";

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
        <div className="mb-2 py-8 px-[56px] bg-[#F4F4F4] rounded-[15px] mt-7 flex items-center font-['Montserrat'] font-bold text-base text-[#303030]">
          <span className="w-[48.34%]">PRODUCT</span>
          <span className="w-[16.50%]">PRICE</span>
          <span className="w-[16.50%]">QTY</span>
          <span className="w-[16.50%]">TOTAL</span>
        </div>
        <div>
          <CartItem
            item={"laptop"}
            title={"2019 Smart Laptop 256 GB 13 inch Pro Chip Core 1 TB HD SSD"}
            variant={"Space Gray"}
            price={"1,659.00"}
            total={"1,659.00"}
          />
          <CartItem
            item={"WATCH"}
            title={"Mobile Watch A Series GPS 7/144 45 mm Red Rubber Band"}
            variant={"Fiery Red"}
            price={"999.00"}
            total={"999.00"}
          />
          <CartItem
            item={"television"}
            title={"LP78245 Smart TV OLED 43 Inch 4K HD Dynamic Color USB HQ"}
            variant={"Jet Black"}
            price={"2,299.00"}
            total={"4,598.00"}
          />
          <CartItem
            item={"gammig"}
            title={"Console Game Stick HD Wireless Bluetooth Connect"}
            variant={"White"}
            price={"109.00"}
            total={"218.00"}
          />
          <CartItem
            item={"tablet"}
            title={"Mini Tablet Pro 16 inch HD Pencil 128 GB System RAM 28"}
            variant={"Space Gray (with Case)"}
            price={"259.00"}
            total={"259.00"}
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="w-[618px] relative">
            <input
              type="text"
              placeholder="Enter coupon code (ex: FIRSTPAY)"
              className="w-full pl-9 py-8 pr-[176px] border border-solid border-[#CBCBCB] rounded-[10px]"
            />
            <span className="absolute top-1/2 -translate-y-1/2 right-9">
              Apply Code
            </span>
          </div>
          <div className="w-[618px] flex items-center justify-between py-8 px-9 bg-[#F4F4F4] rounded-[10px]">
            <p>SUB TOTAL</p>
            <h4>
              $7,733.00
              <span>( excl. shipping fee )</span>
            </h4>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CartPage;
