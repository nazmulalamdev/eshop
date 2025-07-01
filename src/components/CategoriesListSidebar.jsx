import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

const CategoriesListSidebar = () => {
  const [isCategories, setIsCategories] = useState(true);
  const [isBrands, setIsBrands] = useState(true);
  return (
    <>
      <div>
        <div
          className="flex items-center justify-between mb-5 cursor-pointer"
          onClick={() => setIsCategories(!isCategories)}
        >
          <h4 className="font-['Montserrat'] font-bold text-xl">Categories</h4>
          <span>
            <IoIosArrowDown
              size={16}
              className={`${isCategories && "rotate-180"}`}
            />
          </span>
        </div>
        {isCategories && (
          <ul className="flex flex-col gap-3 font-['Montserrat'] font-regular text-base text-[#303030]">
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="computer"
                  className="accent-[#FF624C] w-4 h-4 rounded-[2px]"
                />
                <label for="computer" className="cursor-pointer">
                  Computers & Tablets
                </label>
              </div>
            </li>

            <li className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="mobile"
                  className="accent-[#FF624C] w-4 h-4 rounded-[2px]"
                />
                <label for="mobile" className="cursor-pointer">
                  Mobile & Accessories
                </label>
              </div>
            </li>

            <li className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="tv"
                  className="accent-[#FF624C] w-4 h-4 rounded-[2px]"
                />
                <label for="tv" className="cursor-pointer">
                  TV & Home Theater
                </label>
              </div>
            </li>

            <li className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="audio"
                  className="accent-[#FF624C] w-4 h-4 rounded-[2px]"
                />
                <label for="audio" className="cursor-pointer">
                  Audio & Headphones
                </label>
              </div>
            </li>

            <li className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="camera"
                  className="accent-[#FF624C] w-4 h-4 rounded-[2px]"
                />
                <label for="camera" className="cursor-pointer">
                  Cameras & Camcorders
                </label>
              </div>
            </li>

            <li className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="game"
                  className="accent-[#FF624C] w-4 h-4 rounded-[2px]"
                />
                <label for="game" className="cursor-pointer">
                  Gaming Equipment
                </label>
              </div>
            </li>

            <li className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="home"
                  className="accent-[#FF624C] w-4 h-4 rounded-[2px]"
                />
                <label for="home" className="cursor-pointer">
                  Home Appliances
                </label>
              </div>
            </li>
          </ul>
        )}
      </div>
      <div className="mt-10 mb-10 w-full h-[1px] bg-[#303030] opacity-[25%]"></div>
      <div>
        <div
          onClick={() => setIsBrands(!isBrands)}
          className="flex items-center justify-between mb-5 cursor-pointer"
        >
          <h4 className="font-['Montserrat'] font-bold text-xl text-[#303030]">
            Brands
          </h4>
          <span>
            <IoIosArrowDown
              size={16}
              className={`${isBrands && "rotate-180"}`}
            />
          </span>
        </div>
        {isBrands && (
          <ul className="flex flex-col gap-3 font-['Montserrat'] font-regular text-base text-[#303030]">
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="apple"
                  className="accent-[#FF624C] w-4 h-4 rounded-[2px]"
                />
                <label for="apple" className="cursor-pointer">
                  Apple
                </label>
              </div>
              <span className="text-gray-600">(565)</span>
            </li>

            <li className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="samsung"
                  className="accent-[#FF624C] w-4 h-4 rounded-[2px]"
                />
                <label for="samsung" className="cursor-pointer">
                  Samsung
                </label>
              </div>
              <span className="text-gray-600">(428)</span>
            </li>

            <li className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="asus"
                  className="accent-[#FF624C] w-4 h-4 rounded-[2px]"
                />
                <label for="asus" className="cursor-pointer">
                  Asus
                </label>
              </div>
              <span className="text-gray-600">(323)</span>
            </li>

            <li className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="dell"
                  className="accent-[#FF624C] w-4 h-4 rounded-[2px]"
                />
                <label for="dell" className="cursor-pointer">
                  Dell
                </label>
              </div>
              <span className="text-gray-600">(298)</span>
            </li>

            <li className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="lenovo"
                  className="accent-[#FF624C] w-4 h-4 rounded-[2px]"
                />
                <label for="lenovo" className="cursor-pointer">
                  Lenovo
                </label>
              </div>
              <span className="text-gray-600">(180)</span>
            </li>

            <li className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="hp"
                  className="accent-[#FF624C] w-4 h-4 rounded-[2px]"
                />
                <label for="hp" className="cursor-pointer">
                  HP
                </label>
              </div>
              <span className="text-gray-600">(98)</span>
            </li>

            <li className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="panasonic"
                  className="accent-[#FF624C] w-4 h-4 rounded-[2px]"
                />
                <label for="panasonic" className="cursor-pointer">
                  Panasonic
                </label>
              </div>
              <span className="text-gray-600">(17)</span>
            </li>
          </ul>
        )}
      </div>
      <div className="mt-5">
        <Link className="font-['Montserrat'] font-bold text-base text-[#303030] border-b border-b-[#303030] inline-block cursor-pointer">
          More Brands
        </Link>
      </div>
      <div className="mt-10 mb-10 w-full h-[1px] bg-[#303030] opacity-[25%]"></div>
    </>
  );
};

export default CategoriesListSidebar;
