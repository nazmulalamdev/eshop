import { Link } from "react-router-dom";
import Container from "./commonLayout/Container";

const Banner = () => {
  return (
    <>
      <div className="mt-0 sm:mt-8 mb-6 sm:mb-20">
        <Container>
          <Link to={"/"}>
            <img src="images/banner.png" alt="banner" />
          </Link>
        </Container>
      </div>
    </>
  );
};

export default Banner;
