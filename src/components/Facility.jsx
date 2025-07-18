import DeliveryIcon from "../icons/DeliveryIcon";
import HeadPhone from "../icons/HeadPhone";
import ReturnIcon from "../icons/ReturnIcon";
import SecurityIcon from "../icons/SecurityIcon";
import Container from "./commonLayout/Container";

const Facility = () => {
  return (
    <div className="mb-4 sm:mb-20">
      <Container>
        <div className="flex sm:justify-between flex-wrap items-center">
          <div className="flex items-center gap-2 sm:gap-6 mb-5 sm:mb-0 font-['Montserrat'] w-[49%] sm:w-auto">
            <div>
              <HeadPhone />
            </div>
            <div>
              <h6 className="font-bold text-base">Responsive</h6>
              <p className="font-normal sm:text-base text-xs">
                Customer service available 24/7
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-6 mb-5 sm:mb-0 font-['Montserrat'] w-[49%] sm:w-auto">
            <div>
              <SecurityIcon />
            </div>
            <div>
              <h6 className="font-bold text-base">Secure</h6>
              <p className="font-normal sm:text-base text-xs">
                Certified marketplace since 2017
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-6 mb-5 sm:mb-0 font-['Montserrat'] w-[49%] sm:w-auto">
            <div>
              <DeliveryIcon />
            </div>
            <div>
              <h6 className="font-bold text-base">Shipping</h6>
              <p className="font-normal sm:text-base text-xs">
                Free, fast, and reliable worldwide
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-6 mb-5 sm:mb-0 font-['Montserrat'] w-[49%] sm:w-auto">
            <div>
              <ReturnIcon />
            </div>
            <div>
              <h6 className="font-bold text-base">Transparent</h6>
              <p className="font-normal sm:text-base text-xs">
                Hassle-free return policy
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Facility;
