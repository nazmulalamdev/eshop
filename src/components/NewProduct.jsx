import React from "react";
import ProductLayout from "./commonLayout/ProductLayout";
import Container from "./commonLayout/Container";
import { CgArrowLongRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import Button from "./Button";

const NewProduct = () => {
  return (
    <>
      <div className="mt-[80px]">
        <Container>
          <div className="flex justify-between mb-[48px]">
            <div className="font-['Poppins'] font-semibold text-[36px] text-[#303030]">
              <h2>New Products</h2>
            </div>
            <div className="flex gap-4 items-center">
              <span className="font-['Montserrat'] font-normal text-base text-[#303030]">
                Sort by
              </span>
              <select
                className="w-[233px] p-2.5 bg-white font-['Montserrat'] font-bold text-base text-[#FF624C]"
                name="currency"
              >
                <option
                  className="px-4 py-3 hover:bg-gray-200 cursor-pointer text-[#303030] font-normal"
                  value="AC"
                >
                  All Categories
                </option>
                <option
                  className="px-4 py-3 hover:bg-gray-200 cursor-pointer text-[#303030] font-normal"
                  value="FP"
                >
                  Black Friday
                </option>
                <option
                  className="px-4 py-3 hover:bg-gray-200 cursor-pointer text-[#303030] font-normal"
                  value="NP"
                >
                  New Products
                </option>
                <option
                  className="px-4 py-3 hover:bg-gray-200 cursor-pointer text-[#303030] font-normal"
                  value="AUD"
                >
                  Best Saller
                </option>
                <option
                  className="px-4 py-3 hover:bg-gray-200 cursor-pointer text-[#303030] font-normal"
                  value="EUR"
                >
                  Free Shipping
                </option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-1 items-stretch">
            <ProductLayout
              percentTag="50%"
              category="watch"
              title="Orange Watch 12 High Quality Health Sensor..."
              rating="5"
              totalRating="120"
              price="959.99"
              border={true}
              bg="transparent"
              stock={false}
              stockAmount="50"
              priceColor="yellow"
              priceless="1,919.00"
            />
            <ProductLayout
              percentTag={false}
              category="tablet"
              title="Ultra Tablet Qwerty HD 10765 Series Low Pri..."
              rating="3"
              totalRating="64"
              price="799.99"
              border={true}
              bg="transparent"
              stock={false}
              stockAmount="60"
            />
            <ProductLayout
              percentTag={false}
              category="audio"
              title="QuietComfort 45 Wireless Headphone ..."
              rating="3"
              totalRating="64"
              price="329.99"
              border={true}
              bg="transparent"
              stock={false}
              stockAmount="60"
            />
            <ProductLayout
              percentTag="20%"
              category="laptop"
              title="Surface Laptop 4 XPS 13 Plus 64GB i7 Touch ..."
              rating="2"
              totalRating="130"
              price="2,399.99"
              border={true}
              bg="transparent"
              stock={false}
              stockAmount="10"
              priceColor="yellow"
              priceless="2,819.00"
            />
            <ProductLayout
              percentTag={false}
              category="camera"
              title="CamPro HERO10 Black Sleek Design 2023 4K ..."
              rating="4"
              totalRating="20"
              price="1,499.99"
              border={true}
              bg="transparent"
              stock={false}
              stockAmount="20"
            />
          </div>
          <div className="flex justify-center mt-[64px]">
            <Button
              text="Load More"
              bg="transparent"
              border="1px solid #FF624C"
              color="#FF624C"
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default NewProduct;
