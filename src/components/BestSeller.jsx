import React from "react";
import Container from "./commonLayout/Container";
import { CgArrowLongRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import ProductLayout from "./commonLayout/ProductLayout";

const BestSeller = () => {
  return (
    <>
      <Container>
        <div className="sm:flex sm:justify-between mt-20 px-2 sm:px-0">
          <div className="max-w-[902px]">
            <div className="sm:flex sm:justify-between mb-12">
              <div className="font-['Poppins'] font-semibold text-[36px] text-[#303030]">
                <h2>Best Seller</h2>
              </div>
              <div className="flex gap-4 items-center">
                <Link
                  to={"#"}
                  className="flex items-center gap-4 font-['Montserrat'] font-bold text-base text-[#303030] hover:text-[#FF624C]"
                >
                  View All <CgArrowLongRight size={28} />
                </Link>
              </div>
            </div>

            <div className="flex gap-5 flex-wrap">
              <div className="sm:max-w-[285px]">
                <ProductLayout
                  percentTag={false}
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
              </div>
              <div className="sm:max-w-[285px]">
                <ProductLayout
                  percentTag="30%"
                  category="phone"
                  title="S21 Laptop Ultra HD LED Screen Feature 2023 ..."
                  rating="3"
                  totalRating="100"
                  price="1,199.00"
                  border={true}
                  bg="transparent"
                  stock={false}
                  stockAmount="40"
                  priceColor="yellow"
                  priceless="118.00"
                />
              </div>
              <div className="sm:max-w-[285px]">
                <ProductLayout
                  percentTag={false}
                  category="phone"
                  title="S21 Laptop Ultra HD LED Screen Feature 2023 ..."
                  rating="2"
                  totalRating="100"
                  price="1,199.00"
                  border={true}
                  bg="transparent"
                  stock={false}
                  stockAmount="40"
                />
              </div>
              <div className="sm:max-w-[285px]">
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
              </div>
              <div className="sm:max-w-[285px]">
                <ProductLayout
                  percentTag={false}
                  category="phone"
                  title="S21 Laptop Ultra HD LED Screen Feature 2023 ..."
                  rating="1"
                  totalRating="100"
                  price="1,199.00"
                  border={true}
                  bg="transparent"
                  stock={false}
                  stockAmount="40"
                />
              </div>
              <div className="sm:max-w-[285px]">
                <ProductLayout
                  percentTag="10%"
                  category="phone"
                  title="S21 Laptop Ultra HD LED Screen Feature 2023 ..."
                  rating="3"
                  totalRating="100"
                  price="1,199.00"
                  border={true}
                  bg="transparent"
                  stock={false}
                  stockAmount="40"
                  priceColor="yellow"
                  priceless="118.00"
                />
              </div>
            </div>
          </div>
          <div className="max-w-[544px] hidden sm:block">
            <Link>
              <img src="images/bestseller.png" alt="bestseller" />
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default BestSeller;
