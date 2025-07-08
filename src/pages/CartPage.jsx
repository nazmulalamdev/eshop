import React from "react";
import Container from "../components/commonLayout/Container";
import CartItem from "../components/CartItem";
import Button from "../components/Button";
import Facility from "../components/Facility";
import { CartItemData } from "../data/CartItemData";

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
          {CartItemData.map((product, index) => (
            <CartItem
              key={index}
              item={product.item}
              title={product.title}
              variant={product.variant}
              price={product.price}
              total={product.total}
            />
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="w-[618px] relative">
            <input
              type="text"
              placeholder="Enter coupon code (ex: FIRSTPAY)"
              className="w-full pl-9 py-8 pr-[176px] border border-solid border-[#CBCBCB] rounded-[10px] font-['Montserrat'] font-normal text-base text-[#303030]"
            />
            <span className="absolute top-1/2 -translate-y-1/2 right-9 font-['Poppins'] font-semibold text-[20px] text-[#303030] underline cursor-pointer">
              Apply Code
            </span>
          </div>
          <div className="w-[618px] flex items-center justify-between py-8 px-9 bg-[#F4F4F4] rounded-[10px]">
            <p className="font-['Montserrat'] font-bold text-base text-[#303030]">
              SUB TOTAL
            </p>
            <h4 className="font-['Poppins'] font-semibold text-[24px] text-[#FF624C]">
              $7,733.00
              <span className="font-['Montserrat'] font-normal text-sm text-[#303030] ml-[23px]">
                ( excl. shipping fee )
              </span>
            </h4>
          </div>
        </div>
        <div className="mt-8 mb-[100px] flex justify-end gap-7.5 font-bold text-[20px] text-[#303030]">
          <button className="px-10 py-4 rounded-[10px] hover:bg-[#FF624C] hover:text-white cursor-pointer">
            Continue Shopping
          </button>
          <button className="px-10 py-4 rounded-[10px] bg-[#FF624C] text-white cursor-pointer">
            Update Cart
          </button>
        </div>
      </Container>
      <div className="border-solid border-b border-[#CBCBCB]"></div>
      <div className="mt-10 -mb-7">
        <Facility />
      </div>
    </>
  );
};

export default CartPage;
