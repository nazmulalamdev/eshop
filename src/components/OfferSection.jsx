import React from "react";
import Container from "./commonLayout/Container";
import { Link } from "react-router-dom";

const OfferSection = () => {
  return (
    <>
      <Container>
        <div className="sm:flex sm:justify-between mt-15 sm:mt-20">
          <div className="mb-3 sm:mb-0">
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
