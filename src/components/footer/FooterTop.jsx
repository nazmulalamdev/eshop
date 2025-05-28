import Button from "../Button";
import Container from "../commonLayout/Container";

const FooterTop = () => {
  return (
    <>
      <Container>
        <div className="bg-gradient-to-r from-[#f4f4f4]  to-[#d9d9d9cb] rounded-[25px] px-[100px] py-[114px]">
          <h3 className="font-['Poppins'] font-semibold text-4xl">
            Get Our Updates
          </h3>
          <p className="font-['Montserrat'] font-normal text-xl max-w-[475px] leading-[30px] mt-4 mb-8">
            Browse our wide selection of electronics and find the perfect promo
            for you from newsletter.
          </p>
          <input
            className="w-[494px] bg-white border border-[#929292] py-[18px] px-6 rounded-[10px] mb-4 font-['Montserrat'] font-normal text-base"
            type="text"
            placeholder="Enter your email address ..."
          />
          <br />
          <Button text="Subscribe" />
        </div>
      </Container>
    </>
  );
};

export default FooterTop;
