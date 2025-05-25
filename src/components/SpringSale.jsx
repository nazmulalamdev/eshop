import { FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Container from "./commonLayout/Container";
import ProductLayout from "./commonLayout/ProductLayout";

function SampleNextArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 border text-[#303030] rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
    >
      <FaChevronRight size={16} />
    </div>
  );
}

const SpringSale = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <>
      <div
        className=" mt-[80px] py-[64px]"
        style={{ background: "url('images/timmerbg.png')" }}
      >
        <Container>
          <div className="flex justify-between">
            <div className="max-w-[528px]">timer</div>
            <div className="max-w-[961px] relative gap-5">
              <Slider {...settings}>
                {/* <div className="flex gap-1"> */}
                <ProductLayout
                  percentTag="50%"
                  category="laptop"
                  title="S21 Laptop Ultra HD LED Screen Feature 2023 ..."
                  rating="5"
                  totalRating="80"
                  price="1,199.00"
                  border={true}
                  bg="#D9D9D9"
                  stock={true}
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
                  bg="#D9D9D9"
                  stock={true}
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
                  bg="#D9D9D9"
                  stock={true}
                  stockAmount="60"
                />
                <ProductLayout
                  percentTag={false}
                  category="camera"
                  title="S21 Laptop Ultra HD LED Screen Feature 2023 ..."
                  rating="2"
                  totalRating="130"
                  price="1,199.00"
                  border={true}
                  bg="#D9D9D9"
                  stock={true}
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
                  bg="#D9D9D9"
                  stock={true}
                  stockAmount="20"
                />
                {/* </div> */}
              </Slider>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default SpringSale;
