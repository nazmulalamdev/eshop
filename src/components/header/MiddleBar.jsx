import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import CartIcon from "../../icons/CartIcon";
import UserIcon from "../../icons/UserIcon";
import Container from "../commonLayout/Container";

const MiddleBar = () => {
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
            <div className="relative mr-12">
              <input
                className="w-[332px] border border-[#979797] py-[18px] px-6 rounded-[10px] font-['Montserrat'] font-normal text-sm"
                type="text"
                placeholder="Search Products ..."
              />
              <IoMdSearch className="text-base absolute top-1/2 -translate-y-1/2 right-6 text-[#303030]" />
            </div>
            <Link to={"/cart"}>
              <div className="relative pl-[50px] mr-[90px]">
                <div className="absolute top-[8px] left-0">
                  <CartIcon />
                </div>
                <p className="font-['Montserrat'] font-normal text-base leading-6">
                  Cart
                </p>
                <span className="font-['Montserrat'] font-bold text-sm leading-4">
                  $ 150,00
                </span>
              </div>
            </Link>

            <div className="relative pl-[50px] after:content[''] after:absolute after:w-[1px] after:h-8 after:bg-[#BFBFBF] after:left-[-45px] after:top-1/2 after:-translate-y-1/2">
              <div className="absolute top-[10px] left-0">
                <UserIcon />
              </div>
              <p className="font-['Montserrat'] font-normal text-base leading-6">
                User
              </p>
              <span className="font-['Montserrat'] font-bold text-sm leading-4">
                Account
              </span>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default MiddleBar;
