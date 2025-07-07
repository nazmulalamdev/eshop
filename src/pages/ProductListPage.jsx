import React from "react";
import Container from "../components/commonLayout/Container";
import { useState } from "react";
import ProductLayout from "../components/commonLayout/ProductLayout";
import Pagination from "../components/Pagination";
import PriceRange from "../components/PriceRange";
import { IoGridOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProductListSidebar from "../components/ProductListSidebar";
import CustomCheckBox from "../components/CustomCheckBox";
import { Categories } from "../data/Categories";
import { Brand } from "../data/Brand";

const ProductListPage = () => {
  let [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const product = Array.from({ length: 160 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    price: (Math.random() * 100).toFixed(2),
  }));

  console.log(product);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = product.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <Container>
        <div className="flex mt-16 mb-20 gap-6">
          <div className="w-[355px] relative">
            <div className="bg-[#F4F4F4] rounded-[25px] p-12 sticky top-0">
              <ProductListSidebar title={"Categories"}>
                <div className="flex flex-col gap-3">
                  {Categories.map((item) => (
                    <CustomCheckBox key={item.id} text={item.label} />
                  ))}
                </div>
              </ProductListSidebar>
              <ProductListSidebar title={"Brands"} moreBrand={true}>
                <div className="flex flex-col gap-3">
                  {Brand.map((item) => (
                    <CustomCheckBox
                      key={item.id}
                      text={item.label}
                      quantity={item.count}
                    />
                  ))}
                </div>
              </ProductListSidebar>
              <PriceRange />
            </div>
          </div>

          <div className="w-[80%] relative">
            <h3 className="font-['Poppins'] font-semibold text-[36px] text-[#303030]">
              Products
            </h3>
            <div className="flex justify-between items-center mt-6 mb-12">
              <span></span>
              <div className="flex items-center justify-end gap-[49px]">
                <div className="flex items-center gap-4">
                  <span className="font-['Montserrat'] font-normal text-base text-[#303030]">
                    Sort by
                  </span>
                  <select
                    name=""
                    id=""
                    className="font-['Montserrat'] font-bold text-base text-[#FF624C] w-[151px] p-2.5"
                  >
                    <option value="">Popularity</option>
                  </select>
                </div>
                <div className="flex items-center gap-4">
                  <select
                    name=""
                    id=""
                    className="font-['Montserrat'] font-bold text-base text-[#FF624C] w-[216px] p-2.5"
                  >
                    <option value="" className="text-black">
                      Price Low-to-High
                    </option>
                    <option value="" className="text-black">
                      Price Low-to-High
                    </option>
                  </select>
                </div>
                <div className="flex items-center gap-3">
                  <Link to={"#"}>
                    <IoGridOutline className="text-[24px] text-[#FF624C]" />
                  </Link>

                  <Link to={"#"}>
                    <FaBars className="text-[24px] text-[#D2D2D2]" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-1 justify-between">
              {currentProducts.map((item, index) => (
                <div className="w-[24%]" key={index}>
                  <ProductLayout
                    percentTag="50%"
                    category="audio"
                    title={item.name}
                    rating="3"
                    totalRating="64"
                    price="59.00"
                    border={true}
                    bg="transparent"
                    stock={false}
                    stockAmount="60"
                    priceColor="yellow"
                    priceless="118.00"
                  />
                </div>
              ))}
            </div>
            <div>
              <Pagination
                totalItems={product.length}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProductListPage;
