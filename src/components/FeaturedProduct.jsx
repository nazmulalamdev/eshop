import React from "react";
import ProductLayout from "./commonLayout/ProductLayout";
import Container from "./commonLayout/Container";

const FeaturedProduct = () => {
  return (
    <>
      <Container>
        <div className="flex gap-1">
          <ProductLayout />
          <ProductLayout />
          <ProductLayout />
          <ProductLayout />
          <ProductLayout />
        </div>
      </Container>
    </>
  );
};

export default FeaturedProduct;
