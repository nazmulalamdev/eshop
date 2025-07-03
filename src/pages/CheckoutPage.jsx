import { useState } from "react";
import Container from "../components/commonLayout/Container";

const CheckoutPage = () => {
  const [active, setActive] = useState("info");

  return (
    <>
      <Container>
        <div className="flex items-center gap-8 mb-12 text-common">
          <span className="relative after:absolute after:content-[''] after:w-[1px] after:h-[15px] after:bg-[#303030] after:top-1/2 after:-translate-y-1/2 after:-right-4">
            Home
          </span>
          <span className="relative after:absolute after:content-[''] after:w-[1px] after:h-[15px] after:bg-[#303030] after:top-1/2 after:-translate-y-1/2 after:-right-4">
            Cart
          </span>
          <span className="font-bold">Checkout</span>
        </div>
        <div className="text-center">
          <h3 className="font-['Poppins'] font-bold text-[56px] text-[#303030]">
            Checkout
          </h3>
          <div className="flex items-center justify-center gap-[63px] font-['Poppins'] font-semibold text-[#CBCBCB] text-[24px] mt-11">
            <div
              onClick={() => setActive("info")}
              className="flex items-center gap-4 cursor-pointer"
            >
              {active === "info" && (
                <span className="font-['Montserrat'] font-bold text-base text-white flex items-center justify-center w-[50px] h-[50px] rounded-full bg-[#FF624C]">
                  01
                </span>
              )}
              {active && (
                <p
                  className={`${
                    active === "info" &&
                    "text-[#303030] pb-2 border-b-4 border-solid border-[#FF624C]"
                  }`}
                >
                  Information
                </p>
              )}
            </div>
            <div
              onClick={() => setActive("shipping")}
              className="flex items-center gap-4 cursor-pointer"
            >
              {active === "shipping" && (
                <span className="font-['Montserrat'] font-bold text-base text-white flex items-center justify-center w-[50px] h-[50px] rounded-full bg-[#FF624C]">
                  02
                </span>
              )}
              <p
                className={`${
                  active === "shipping" &&
                  "text-[#303030] pb-2 border-b-4 border-solid border-[#FF624C]"
                }`}
              >
                Shipping
              </p>
            </div>
            <div
              onClick={() => setActive("payment")}
              className="flex items-center gap-4 cursor-pointer"
            >
              {active === "payment" && (
                <span className="font-['Montserrat'] font-bold text-base text-white flex items-center justify-center w-[50px] h-[50px] rounded-full bg-[#FF624C]">
                  03
                </span>
              )}
              <p
                className={`${
                  active === "payment" &&
                  "text-[#303030] pb-2 border-b-4 border-solid border-[#FF624C]"
                }`}
              >
                Payment
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CheckoutPage;
