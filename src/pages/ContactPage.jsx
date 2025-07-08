import React from "react";
import Container from "../components/commonLayout/Container";
import { Link } from "react-router-dom";
import MailIcon from "../icons/MailIcon";
import PhoneIcon from "../icons/PhoneIcon";
import Location from "../icons/Location";
import Box from "../components/Box";
import Button from "../components/Button";

const ContactPage = () => {
  return (
    <>
      <Container>
        <div className="mt-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14606.748365553023!2d90.37343633042842!3d23.758535297964738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8a899015fc1%3A0x781d329e6fac2ff5!2sKhamar%20Bari%20Goal%20Chottor%2C%20Dhaka%201215!5e0!3m2!1sen!2sbd!4v1751872974332!5m2!1sen!2sbd"
            width="1520"
            height="600"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex items-center gap-8 mb-12 text-common mt-16">
          <span className="relative after:absolute after:content-[''] after:w-[1px] after:h-[15px] after:bg-[#303030] after:top-1/2 after:-translate-y-1/2 after:-right-4">
            Home
          </span>
          <span className="font-bold">Contact</span>
        </div>
        <div className="flex gap-[56px]">
          <div className="w-[57.23%]">
            <h2 className="font-['Poppins'] font-semibold text-[#303030] text-[36px]">
              Contact Us
            </h2>
            <p className="mt-3 font-['Montserrat'] font-normal text-[20px] text-[#303030]">
              Have any questions for us? Don’t hesitate to contact us.
            </p>
            <div className="mt-12 mb-8">
              <div>
                <Box
                  placeholder={"Amelia Robert Watson"}
                  inputtype={"Name"}
                  star={true}
                />
              </div>

              <div className="flex gap-[15px] mt-8">
                <div className="w-[345px]">
                  <Box
                    placeholder={"+123 456 7890"}
                    inputtype={"Phone Number"}
                  />
                </div>
                <div className="w-[510px]">
                  <Box
                    placeholder={"amelia.watson@eshop.com"}
                    inputtype={"Email Address"}
                    star={true}
                  />
                </div>
              </div>
              <div className="mt-8">
                <Box
                  type={"textarea"}
                  placeholder={"Enter your message ..."}
                  inputtype={"Message"}
                  star={true}
                />
              </div>
            </div>
            <div className="mb-20">
              <Button text={"Submit"} />
            </div>
          </div>
          <div className="w-[39.07%]">
            <div className="p-10 bg-[#F4F4F4] rounded-[25px]">
              <h3 className="font-['Poppins'] font-semibold text-[#303030] text-[24px]">
                Let’s Keep in Touch!
              </h3>
              <p className="mt-4 font-['Montserrat'] font-normal text-[20px] text-[#303030] w-[467px]">
                We would love to hear from you. Contact us for any inquiries you
                might have for us.
              </p>
              <ul className="mt-10 flex flex-col gap-3 font-['Montserrat'] font-bold text-base text-[#303030]">
                <li className="relative pl-[28px] hover:text-[#FF624C]">
                  <Link to="tel:+1555123-4567">
                    <span className="absolute top-[1px] left-0 h-5 w-5">
                      <PhoneIcon />
                    </span>{" "}
                    +1 (555) 123-4567
                  </Link>
                </li>
                <li className="relative pl-[28px] hover:text-[#FF624C]">
                  <Link to="mailto:information@eshop.com">
                    {/* <IoIosMail className="absolute top-[1px] left-0 h-5 w-5" />{" "} */}
                    <span className="absolute top-[1px] left-0 h-5 w-5">
                      <MailIcon />
                    </span>
                    information@eshop.com
                  </Link>
                </li>
                <li className="relative pl-[28px] hover:text-[#FF624C]">
                  <Link
                    to="https://maps.app.goo.gl/y2pNKvRCn3pEGuxH8"
                    target="_blabk"
                  >
                    <span className="absolute top-[1px] left-0 h-5 w-5">
                      <Location />
                    </span>{" "}
                    123 Main Street, Suite 105, Anytown USA
                  </Link>
                </li>
              </ul>
              <h3 className="mt-[56px] font-['Montserrat'] font-bold text-[20px] text-[#303030] pb-1 inline-block border-b-[4px] border-solid border-[#FF624C]">
                Opening Hours
              </h3>
              <div className="font-['Montserrat'] font-bold text-base text-[#303030]">
                <p className="mt-6">
                  MON to FRI:{" "}
                  <span className="font-normal ml-3">08:00 AM - 04:00 PM</span>
                </p>
                <p className="mt-2">
                  SAT to SUN:{" "}
                  <span className="font-normal ml-3">09:00 AM - 03:00 PM</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ContactPage;
