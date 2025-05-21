import React from "react";
import Container from "./commonLayout/Container";
import { Link } from "react-router-dom";

const OfferSection = () => {
  return (
    <>
      <Container>
        <div className="flex justify-between mt-[80px]">
          <div>
            <Link to={"#"}>
              <img src="images/offer1.png" alt="offerimg" />
            </Link>
          </div>
          <div>
            <Link to={"#"}>
              <img src="images/offer2.png" alt="offerimg" />
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OfferSection;
