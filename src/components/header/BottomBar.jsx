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

  const [isCategories, setIsCategories] = useState(false);
  const categoriesRef = useRef(null);

  const handleCategories = () => {
    setIsCategories(!isCategories);
  };

  // useEffect(() => {
  //   const handleClickCategories = (event) => {
  //     // console.log(categoriesRef.current.contains(event.target));
  //     // console.log(event.target);

  //     if (
  //       categoriesRef.current &&
  //       !categoriesRef.current.contains(event.target)
  //     ) {
  //       setIsCategories(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handleClickCategories);

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickCategories);
  //   };
  // }, []);

  useEffect(() => {
    const handleClickOutSide = (event) => {
      // console.log(dropdownRef.current.contains(event.target));
      // console.log(event.target);

      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    const handleClickCategories = (event) => {
      // console.log(categoriesRef.current.contains(event.target));
      // console.log(event.target);

      if (
        categoriesRef.current &&
        !categoriesRef.current.contains(event.target)
      ) {
        setIsCategories(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutSide);
    document.addEventListener("mousedown", handleClickCategories);

    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
      document.removeEventListener("mousedown", handleClickCategories);
    };
  }, []);

  return (
    <>
      <div className="hidden bg-[#FF624C] sm:block">
        <Container>
          <div className="flex justify-between items-center py-6">
            <div>
              <ul className="flex items-center gap-x-[80px] font-['Montserrat'] font-bold text-base leading-6 text-white">
                <li ref={categoriesRef} className="relative">
                  <button
                    onClick={handleCategories}
                    className="flex items-center gap-x-4 cursor-pointer"
                  >
                    <FaBars /> All Categories{" "}
                    <FaChevronDown className="absolute top-1 -right-6" />
                  </button>
                  {isCategories && (
                    <div className="absolute z-10 left-8 mt-2 w-42 bg-white rounded shadow-lg">
                      <ul className="py-2 font-['Montserrat'] font-normal text-base leading-6 text-black">
                        <li
                          onClick={handleCategories}
                          className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        >
                          Categories1
                        </li>
                        <li
                          onClick={handleCategories}
                          className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        >
                          Categories2
                        </li>
                        <li
                          onClick={handleCategories}
                          className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        >
                          Categories3
                        </li>
                        <li
                          onClick={handleCategories}
                          className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        >
                          Categories4
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
                <li ref={dropdownRef} className="relative">
                  <button onClick={handleDropdown} className="cursor-pointer">
                    Products{" "}
                    <FaChevronDown className="absolute top-1 -right-6" />
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute z-10 mt-2 w-36 bg-white rounded-lg shadow-lg">
                      <ul className="py-2 font-['Montserrat'] font-normal text-base leading-6 text-black">
                        <li
                          onClick={handleDropdown}
                          className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        >
                          Products1
                        </li>
                        <li
                          onClick={handleDropdown}
                          className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        >
                          Products2
                        </li>
                        <li
                          onClick={handleDropdown}
                          className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        >
                          Products3
                        </li>
                        <li
                          onClick={handleDropdown}
                          className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        >
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
      <div className="block sm:hidden">
        <ul className="sm:hidden h-screen top-0 py-2 font-['Montserrat'] font-normal text-base leading-6 text-black absolute z-10 mt-2 w-full bg-white shadow-xl rounded-lg">
          <li
            onClick={handleDropdown}
            className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
          >
            Products1
          </li>
          <li
            onClick={handleDropdown}
            className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
          >
            Products2
          </li>
          <li
            onClick={handleDropdown}
            className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
          >
            Products3
          </li>
          <li
            onClick={handleDropdown}
            className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
          >
            Products4
          </li>
        </ul>
      </div>
    </>
  );
};

export default BottomBar;
