import DeliveryIcon from "../icons/DeliveryIcon";
import HeadPhone from "../icons/HeadPhone";
import ReturnIcon from "../icons/ReturnIcon";
import SecurityIcon from "../icons/SecurityIcon";
import Container from "./commonLayout/Container";

const Facility = () => {
  return (
    <div className="mb-20">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div>
              <HeadPhone />
            </div>
            <div>
              <h6 className="font-['Montserrat'] font-bold text-base">
                Responsive
              </h6>
              <p className="font-['Montserrat'] font-normal text-base">
                Customer service available 24/7
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div>
              <SecurityIcon />
            </div>
            <div>
              <h6 className="font-['Montserrat'] font-bold text-base">
                Secure
              </h6>
              <p className="font-['Montserrat'] font-normal text-base">
                Certified marketplace since 2017
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div>
              <DeliveryIcon />
            </div>
            <div>
              <h6 className="font-['Montserrat'] font-bold text-base">
                Shipping
              </h6>
              <p className="font-['Montserrat'] font-normal text-base">
                Free, fast, and reliable worldwide
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div>
              <ReturnIcon />
            </div>
            <div>
              <h6 className="font-['Montserrat'] font-bold text-base">
                Transparent
              </h6>
              <p className="font-['Montserrat'] font-normal text-base">
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
