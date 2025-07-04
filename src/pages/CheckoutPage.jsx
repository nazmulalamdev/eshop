import { useState } from "react";
import Container from "../components/commonLayout/Container";
import Box from "../components/Box";
import Button from "../components/Button";

const CheckoutPage = () => {
  const [active, setActive] = useState("info");

  return (
    <>
      <Container>
        <div className="flex items-center gap-8 mb-12 text-common mt-16">
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
        <div className="flex gap-[56px] mt-10 mb-20">
          <div className="w-[57.24%]">
            <h3 className="font-['Poppins'] font-semibold text-[36px] text-[#303030] mb-10">
              Billing Details
            </h3>
            <div className="flex flex-wrap gap-x-4 gap-y-8">
              <div className="w-[49%]">
                <Box inputtype="First Name" placeholder="Amelia Robert" />
              </div>
              <div className="w-[49%]">
                <Box inputtype="First Name" placeholder="Amelia Robert" />
              </div>
              <div className="w-[49%]">
                <Box inputtype="First Name" placeholder="Amelia Robert" />
              </div>
              <div className="w-[49%]">
                <Box inputtype="First Name" placeholder="Amelia Robert" />
              </div>
              {/* ...... */}
              <div className="w-full">
                <Box inputtype="First Name" placeholder="Amelia Robert" />
              </div>

              <div className="w-[49%]">
                <Box inputtype="First Name" placeholder="Amelia Robert" />
              </div>
              <div className="w-[49%]">
                <Box inputtype="First Name" placeholder="Amelia Robert" />
              </div>
              <div className="w-[49%]">
                <Box inputtype="First Name" placeholder="Amelia Robert" />
              </div>
              <div className="w-[49%]">
                <Box inputtype="First Name" placeholder="Amelia Robert" />
              </div>
              <div className="w-full">
                <Box
                  inputtype="First Name"
                  placeholder="Amelia Robert"
                  type="textarea"
                />
              </div>
            </div>
          </div>
          <div className="w-[39.8%]">
            <div className="bg-[#F4F4F4] rounded-[25px] p-10">
              <h3 className="font-['Poppins'] font-semibold text-[24px] text-[#303030] mb-7">
                Order Summary
              </h3>
              <div className="flex justify-between font-['Montserrat'] text-[20px] text-[#303030] border-b border-solid border-[#C3C3C3] pb-5 mt-5">
                <div className="w-[250px]">
                  <p className="font-normal">
                    2019 Smart Laptop 256 GB 13 inch Pro Chip Core 1 TB HD SSD
                  </p>
                </div>
                <div className="font-bold">1</div>
                <div className="font-['Poppins'] font-semibold">$1,659.00</div>
              </div>
              <div className="flex justify-between font-['Montserrat'] text-[20px] text-[#303030] border-b border-solid border-[#C3C3C3] pb-5 mt-5">
                <div className="w-[250px]">
                  <p className="font-normal">
                    2019 Smart Laptop 256 GB 13 inch Pro Chip Core 1 TB HD SSD
                  </p>
                </div>
                <div className="font-bold">1</div>
                <div className="font-['Poppins'] font-semibold">$1,659.00</div>
              </div>
              <div className="flex justify-between font-['Montserrat'] text-[20px] text-[#303030] border-b border-solid border-[#C3C3C3] pb-5 mt-5">
                <div className="w-[250px]">
                  <p className="font-normal">
                    2019 Smart Laptop 256 GB 13 inch Pro Chip Core 1 TB HD SSD
                  </p>
                </div>
                <div className="font-bold">1</div>
                <div className="font-['Poppins'] font-semibold">$1,659.00</div>
              </div>
              <div className="flex justify-between font-['Montserrat'] text-[20px] text-[#303030] border-b border-solid border-[#C3C3C3] pb-5 mt-5">
                <div className="w-[250px]">
                  <p className="font-normal">
                    2019 Smart Laptop 256 GB 13 inch Pro Chip Core 1 TB HD SSD
                  </p>
                </div>
                <div className="font-bold">1</div>
                <div className="font-['Poppins'] font-semibold">$1,659.00</div>
              </div>
              <div className="flex justify-between font-['Montserrat'] text-[20px] text-[#303030] border-b border-solid border-[#C3C3C3] pb-5 mt-5">
                <div className="w-[250px]">
                  <p className="font-normal">
                    2019 Smart Laptop 256 GB 13 inch Pro Chip Core 1 TB HD SSD
                  </p>
                </div>
                <div className="font-bold">1</div>
                <div className="font-['Poppins'] font-semibold">$1,659.00</div>
              </div>
              <div className="flex justify-between font-['Montserrat'] text-[20px] text-[#303030] mt-5 mb-12">
                <div className="w-[250px]">
                  <p className="font-normal">
                    Shipping Fee <span></span>
                  </p>
                </div>
                <div className="font-bold">1</div>
              </div>
              <div className="bg-white rounded-[10px] p-6">
                <div className="flex justify-between items-center font-['Montserrat'] font-bold text-[#303030] mb-6">
                  <p className="text-base">Total</p>
                  <span className="text-[20px]">$4,999.00</span>
                </div>
                <button className="w-full bg-[#FF624C] rounded-[10px] py-6 text-white font-['Montserrat'] font-bold text-[20px] cursor-pointer">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CheckoutPage;
