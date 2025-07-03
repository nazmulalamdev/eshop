import React from "react";
import Container from "./commonLayout/Container";
import ProductLayout from "./commonLayout/ProductLayout";
import Button from "./Button";
import { Link } from "react-router-dom";
import { CgArrowLongRight } from "react-icons/cg";

const RelatedProduct = () => {
  return (
    <>
      <div className="my-[64px]">
        <Container>
          <div className="flex justify-between mb-[48px]">
            <div className="font-['Poppins'] font-semibold text-[36px] text-[#303030]">
              <h2>Related Products</h2>
            </div>
            <div>
              <Link
                to={"#"}
                className="flex items-center gap-4 font-['Montserrat'] font-bold text-base text-[#303030] hover:text-[#FF624C]"
              >
                View All <CgArrowLongRight size={28} />
              </Link>
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
        </Container>
      </div>
    </>
  );
};

export default RelatedProduct;
