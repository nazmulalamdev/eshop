import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import CartIcon from "../../icons/CartIcon";
import UserIcon from "../../icons/UserIcon";
import Container from "../commonLayout/Container";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";

const MiddleBar = () => {
  const [show, setShow] = useState(false);

  const handleSearch = () => {
    setShow(!show);
  };
  return (
    <>
      <Container>
        <div className="flex items-center justify-between py-8">
          <div>
            <Link to={"#"}>
              <img src="images/logo.png" alt="logo" />
            </Link>
          </div>
          <div className="flex items-center">
            <div className="relative sm:mr-12 mr-4">
              <input
                className={`${
                  !show && "hidden"
                } sm:block w-[350px] sm:w-[332px] border border-[#979797] py-4.5 px-6 rounded-[10px] font-['Montserrat'] font-normal text-sm`}
                type="text"
                placeholder="Search Products ..."
              />
              <Link>
                <IoMdSearch className="text-base absolute top-1/2 -translate-y-1/2 right-6  text-[#303030] hidden sm:block" />
              </Link>
              <Link>
                <IoMdSearch
                  size={30}
                  onClick={handleSearch}
                  className={`text-base absolute sm:top-1/2 ${
                    show ? "-mt-[30px]" : "top-0.5"
                  } -translate-y-1/2 sm:right-6 right-2 text-[#303030] sm:hidden`}
                />
              </Link>
              <Link>
                <FaBars className="text-base absolute top-1/2 -translate-y-1/2 right-12  text-[#303030] sm:hidden" />
              </Link>
            </div>
            <Link to={"/cart"} className="relative sm:pl-[50px] sm:mr-[90px]">
              <div className="sm:absolute sm:top-[8px] sm:left-0">
                <CartIcon />
              </div>
              <div className="hidden sm:block">
                <p className="font-['Montserrat'] font-normal text-base leading-6">
                  Cart
                </p>
                <span className="font-['Montserrat'] font-bold text-sm leading-4">
                  $ 150,00
                </span>
              </div>
            </Link>
            <Link
              to={"#"}
              className="relative sm:pl-[50px] pl-[30px] after:content[''] after:absolute after:w-[1px] after:h-8 after:bg-[#BFBFBF] sm:after:left-[-45px] after:left-3 after:top-1/2 after:-translate-y-1/2"
            >
              <div className="sm:absolute sm:top-[10px] sm:left-0">
                <UserIcon />
              </div>
              <div className="hidden sm:block">
                <p className="font-['Montserrat'] font-normal text-base leading-6">
                  User
                </p>
                <span className="font-['Montserrat'] font-bold text-sm leading-4">
                  Account
                </span>
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default MiddleBar;
