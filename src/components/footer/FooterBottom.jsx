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
                  <li className="relative pl-[28px] hover:text-[#FF624C]">
                    <Link to="tel:+1555123-4567">
                      <IoCall className="absolute top-[3px] left-0 h-5 w-5" />{" "}
                      +1 (555) 123-4567
                    </Link>
                  </li>
                  <li className="relative pl-[28px] hover:text-[#FF624C]">
                    <Link to="mailto:information@eshop.com">
                      <IoIosMail className="absolute top-[1px] left-0 h-5 w-5" />{" "}
                      information@eshop.com
                    </Link>
                  </li>
                  <li className="relative pl-[28px] hover:text-[#FF624C]">
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
                  <li className="hover:text-[#FF624C]">
                    <Link to={"#"}>Products List</Link>
                  </li>
                  <li className="hover:text-[#FF624C]">
                    <Link to={"#"}>Order Tracking</Link>
                  </li>
                  <li className="hover:text-[#FF624C]">
                    <Link to={"#"}>Products Guide</Link>
                  </li>
                  <li className="hover:text-[#FF624C]">
                    <Link to={"#"}>Shopping Cart</Link>
                  </li>
                  <li className="hover:text-[#FF624C]">
                    <Link to={"#"}>Tech Blog</Link>
                  </li>
                </ul>
              </div>
              <div className="mr-[96px]">
                <h4 className="font-['Poppins'] font-semibold text-xl text-[#303030]">
                  Supports
                </h4>
                <ul className="mt-[24px] flex flex-col gap-3 font-['Montserrat'] font-normal text-base text-[#303030]">
                  <li className="hover:text-[#FF624C]">
                    <Link to={"#"}>About Us</Link>
                  </li>
                  <li className="hover:text-[#FF624C]">
                    <Link to={"#"}>Privacy Policy</Link>
                  </li>
                  <li className="hover:text-[#FF624C]">
                    <Link to={"#"}>Return Policy</Link>
                  </li>
                  <li className="hover:text-[#FF624C]">
                    <Link to={"#"}>Help Centre</Link>
                  </li>
                  <li className="hover:text-[#FF624C]">
                    <Link to={"#"}>Store Locations</Link>
                  </li>
                  <li className="hover:text-[#FF624C]">
                    <Link to={"#"}>Careers</Link>
                  </li>
                </ul>
              </div>
              <div className="mr-[80px]">
                <h4 className="font-['Poppins'] font-semibold text-xl text-[#303030]">
                  Home Appliances
                </h4>
                <ul className="mt-[24px] flex flex-col gap-3 font-['Montserrat'] font-normal text-base text-[#303030]">
                  <li className="hover:text-[#FF624C]">
                    <Link to={"#"}>Computers & Tablets</Link>
                  </li>
                  <li className="hover:text-[#FF624C]">
                    <Link to={"#"}>Mobile Phones & Accessories</Link>
                  </li>
                  <li className="hover:text-[#FF624C]">
                    <Link to={"#"}>TV & Home Theater</Link>
                  </li>
                  <li className="hover:text-[#FF624C]">
                    <Link to={"#"}>Audio & Headphones</Link>
                  </li>
                  <li className="hover:text-[#FF624C]">
                    <Link to={"#"}>Cameras & Camcorders</Link>
                  </li>
                  <li className="hover:text-[#FF624C]">
                    <Link to={"#"}>Gaming Equipment</Link>
                  </li>
                  <li className="hover:text-[#FF624C]">
                    <Link to={"#"}>Home Appliances</Link>
                  </li>
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
                  <li className="hover:text-[#FF624C]">
                    <Link to={"#"}>Twitter</Link>
                  </li>
                  <li className="hover:text-[#FF624C]">
                    <Link to={"#"}>Instagram</Link>
                  </li>
                  <li className="hover:text-[#FF624C]">
                    <Link to={"#"}>Facebook</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-between mt-[80px] mb-[80px] border-t border-[#BFBFBF] border-solid py-2 font-['Montserrat'] font-normal text-sm text-[#303030]">
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
