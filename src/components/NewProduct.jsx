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

          <div className="flex gap-1">
            <ProductLayout
              percentTag="50%"
              category="laptop"
              title="S21 Laptop Ultra HD LED Screen Feature 2023 ..."
              rating="5"
              totalRating="80"
              price="1,199.00"
              border={true}
              bg="transparent"
              stock={false}
              stockAmount="50"
            />
            <ProductLayout
              percentTag={false}
              category="phone"
              title="S21 Laptop Ultra HD LED Screen Feature 2023 ..."
              rating="4"
              totalRating="100"
              price="1,199.00"
              border={true}
              bg="transparent"
              stock={false}
              stockAmount="40"
            />
            <ProductLayout
              percentTag={false}
              category="audio"
              title="S21 Laptop Ultra HD LED Screen Feature 2023 ..."
              rating="3"
              totalRating="64"
              price="1,199.00"
              border={true}
              bg="transparent"
              stock={false}
              stockAmount="60"
            />
            <ProductLayout
              percentTag="20%"
              category="camera"
              title="S21 Laptop Ultra HD LED Screen Feature 2023 ..."
              rating="2"
              totalRating="130"
              price="1,199.00"
              border={true}
              bg="transparent"
              stock={false}
              stockAmount="10"
            />
            <ProductLayout
              percentTag={false}
              category="television"
              title="S21 Laptop Ultra HD LED Screen Feature 2023 ..."
              rating="4"
              totalRating="20"
              price="1,199.00"
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
