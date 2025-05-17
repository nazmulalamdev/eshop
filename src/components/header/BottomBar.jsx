import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import Container from "../commonLayout/Container";
import { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

const BottomBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutSide = (event) => {
      // console.log(dropdownRef.current.contains(event.target));
      // console.log(event.target);

      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutSide);

    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, []);

  return (
    <>
      <div className="bg-[#FF624C]">
        <Container>
          <div className="flex justify-between items-center py-6">
            <div>
              <ul className="flex items-center gap-x-[80px] font-['Montserrat'] font-bold text-base leading-6 text-white">
                <li>
                  <Link
                    className="flex items-center gap-x-4"
                    to={"/product-list"}
                  >
                    <FaBars /> All Categories
                  </Link>
                </li>
                <li ref={dropdownRef} className="relative">
                  <button onClick={handleDropdown} className="cursor-pointer">
                    Products{" "}
                    <FaChevronDown className="absolute top-1 -right-6" />
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute z-10 mt-2 w-36 bg-white rounded shadow-lg">
                      <ul className="py-2 font-['Montserrat'] font-normal text-base leading-6 text-black">
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                          Products1
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                          Products2
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                          Products3
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                          Products4
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
                <li>
                  <Link to={"/blog"}>Blog</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex items-center gap-x-[80px] font-['Montserrat'] font-bold text-base leading-6 text-white">
                <li>
                  <Link to={"#"}>LIMITED SALE 👋🏻</Link>
                </li>
                <li>
                  <Link to={"#"}>Best Seller</Link>
                </li>
                <li>
                  <Link to={"#"}>New Arrival</Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default BottomBar;
