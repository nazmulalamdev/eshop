import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";
import Container from "../commonLayout/Container";

const FooterBottom = () => {
  return (
    <>
      <div className="mt-[100px]">
        <Container>
          <div>
            <div className="flex">
              <div className="mr-[167px]">
                <img src="images/logo.png" alt="logo" />
                <ul className="mt-[158px] flex flex-col gap-3 font-['Montserrat'] font-normal text-base text-[#303030]">
                  <li className="relative pl-[28px]">
                    <Link to="tel:+1555123-4567">
                      <IoCall className="absolute top-[3px] left-0 h-5 w-5" />{" "}
                      +1 (555) 123-4567
                    </Link>
                  </li>
                  <li className="relative pl-[28px]">
                    <Link to="mailto:information@eshop.com">
                      <IoIosMail className="absolute top-[1px] left-0 h-5 w-5" />{" "}
                      information@eshop.com
                    </Link>
                  </li>
                  <li className="relative pl-[28px]">
                    <Link
                      to="https://maps.app.goo.gl/y2pNKvRCn3pEGuxH8"
                      target="_blabk"
                    >
                      <FaLocationDot className="absolute top-[1px] left-0 h-5 w-5" />{" "}
                      123 Main Street, Suite 105, Anytown USA
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mr-[96px]">
                <h4 className="font-['Poppins'] font-semibold text-xl text-[#303030]">
                  Link
                </h4>
                <ul className="mt-[24px] flex flex-col gap-3 font-['Montserrat'] font-normal text-base text-[#303030]">
                  <li>Products List</li>
                  <li>Order Tracking</li>
                  <li>Products Guide</li>
                  <li>Shopping Cart</li>
                  <li>Tech Blog</li>
                </ul>
              </div>
              <div className="mr-[96px]">
                <h4 className="font-['Poppins'] font-semibold text-xl text-[#303030]">
                  Supports
                </h4>
                <ul className="mt-[24px] flex flex-col gap-3 font-['Montserrat'] font-normal text-base text-[#303030]">
                  <li>About Us</li>
                  <li>Privacy Policy</li>
                  <li>Return Policy</li>
                  <li>Help Centre</li>
                  <li>Store Locations</li>
                  <li>Careers</li>
                </ul>
              </div>
              <div className="mr-[80px]">
                <h4 className="font-['Poppins'] font-semibold text-xl text-[#303030]">
                  Home Appliances
                </h4>
                <ul className="mt-[24px] flex flex-col gap-3 font-['Montserrat'] font-normal text-base text-[#303030]">
                  <li>Computers & Tablets</li>
                  <li>Mobile Phones & Accessories</li>
                  <li>TV & Home Theater</li>
                  <li>Audio & Headphones</li>
                  <li>Cameras & Camcorders</li>
                  <li>Gaming Equipment</li>
                  <li>Home Appliances</li>
                </ul>
              </div>
              <div>
                <h4 className="font-['Poppins'] font-semibold text-xl text-[#303030] mb-6">
                  Payments
                </h4>
                <img src="images/payment.png" alt="logo" />
                <h4 className="font-['Poppins'] font-semibold text-xl text-[#303030] mt-[73px]">
                  Follow Us
                </h4>
                <ul className="mt-[24px] flex flex-col gap-3 font-['Montserrat'] font-normal text-base text-[#303030]">
                  <li>Twitter</li>
                  <li>Instagram</li>
                  <li>Facebook</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-between mt-[80px] border-t border-[#BFBFBF] border-solid py-2 font-['Montserrat'] font-normal text-sm text-[#303030]">
              <span>Copyright © 2023 E-Shop. All Rights Reserved.</span>
              <span>Privacy Policy | Terms & Condition | Sitemap</span>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default FooterBottom;
