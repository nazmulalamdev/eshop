import Container from "../commonLayout/Container";

const FooterTop = () => {
  return (
    <>
      <Container>
        <div className="bg-[#D9D9D9] h-[531px] rounded-[25px] pl-[100px] py-[113px]">
          <h3>Get Our Updates</h3>
          <p>
            Browse our wide selection of electronics and find the perfect promo
            for you from newsletter.
          </p>
          <input type="text" placeholder="Enter your email address ..." />
          <button>Subscribe</button>
        </div>
      </Container>
    </>
  );
};

export default FooterTop;
