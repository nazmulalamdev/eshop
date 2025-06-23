import { IoIosArrowUp } from "react-icons/io";
import Container from "../components/commonLayout/Container";
import { useState } from "react";
import { Link } from "react-router-dom";
import ProductLayout from "../components/commonLayout/ProductLayout";
import Pagination from "../components/Pagination";

const ProductListPage = () => {
  let [minValue, setMinValue] = useState(10);
  let [maxValue, setMaxValue] = useState(3000);
  let [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const updateSlider = (type, value) => {
    if (type == "min") {
      const newMin = Math.min(parseInt(value), maxValue);
      setMinValue(newMin);
    } else {
      const newMax = Math.max(parseInt(value), minValue);
      setMaxValue(newMax);
    }
  };

  const minPercent = (minValue / 5000) * 100;
  const maxPercent = (maxValue / 5000) * 100;

  const product = Array.from({ length: 160 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    price: (Math.random() * 100).toFixed(2),
  }));

  console.log(product);

  const [isOpen, setIsOpen] = useState(true);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = product.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <Container>
        <div className="flex mt-16 mb-20 gap-6">
          <div className="w-[355px] bg-[#F4F4F4] rounded-[25px] p-12 h-full">
            <div>
              <div
                className="flex items-center justify-between mb-5"
                onClick={() => setIsOpen(!isOpen)}
              >
                <h4 className="font-['Montserrat'] font-bold text-xl">
                  Categories
                </h4>
                <span>
                  <IoIosArrowUp size={16} />
                </span>
              </div>
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
            </div>
            <div className="mt-10 mb-10 w-full h-[1px] bg-[#303030] opacity-[25%]"></div>
            <div>
              <div className="flex items-center justify-between mb-5">
                <h4 className="font-['Montserrat'] font-bold text-xl text-[#303030]">
                  Brands
                </h4>
                <span>
                  <IoIosArrowUp size={16} />
                </span>
              </div>
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
            </div>
            <div className="mt-5">
              <Link className="font-['Montserrat'] font-bold text-base text-[#303030] border-b border-b-[#303030] inline-block cursor-pointer">
                More Brands
              </Link>
            </div>

            <div className="mt-10 mb-10 w-full h-[1px] bg-[#303030] opacity-[25%]"></div>

            <div>
              <div className="flex items-center justify-between">
                <h3 className="font-['Montserrat'] font-bold text-[20px] text-[#303030]">
                  Price
                </h3>
                <span>
                  <IoIosArrowUp size={16} />
                </span>
              </div>
              <div className="flex justify-between mt-6 font-['Montserrat'] font-regular text-base text-[#303030]">
                {/* <span className="w-[124px] py-[25px] px-[32px] rounded-[10px] border border-[#303030] text-center">
                  $ {minValue}
                </span> */}

                <input
                  type="text"
                  placeholder="$0"
                  value={`${minValue}`}
                  onChange={(e) => setMinValue(e.target.value)}
                  className="w-[124px] py-[25px] px-[32px] rounded-[10px] border border-[#303030] text-center opacity-[50%]"
                />

                {/* <span className="w-[124px] py-[25px] px-[32px] rounded-[10px] border border-[#303030] text-center">
                  $ {maxValue}
                </span> */}

                <input
                  type="text"
                  placeholder="$3000"
                  value={maxValue}
                  onChange={(e) => setMaxValue(e.target.value)}
                  className="w-[124px] py-[25px] px-[32px] rounded-[10px] border border-[#303030] text-center opacity-[50%]"
                />
              </div>
              <div className="relative w-full h-[2px] bg-[#303030] mt-[30px]">
                <div
                  className="absolute h-full bg-[#FF624C] left-[10%] w-[20%]"
                  style={{
                    left: `${minPercent}%`,
                    width: `${maxPercent - minPercent}%`,
                  }}
                ></div>
                <input
                  type="range"
                  min={0}
                  max={5000}
                  value={minValue}
                  step={10}
                  onChange={(e) => updateSlider("min", e.target.value)}
                  className="absolute w-full h-[2px] bg-transparent pointer-events-none appearance-none rounded z-10"
                />
                <input
                  type="range"
                  min={100}
                  max={5000}
                  value={maxValue}
                  step={10}
                  onChange={(e) => updateSlider("max", e.target.value)}
                  className="absolute w-full h-[2px] bg-transparent pointer-events-none appearance-none rounded z-20"
                />
              </div>
            </div>
          </div>
          <div className="w-[80%]">
            <div className="flex flex-wrap gap-1">
              {currentProducts.map((item, index) => (
                <div className="w-[24%]" key={index}>
                  <ProductLayout
                    percentTag="50%"
                    category="audio"
                    title={item.name}
                    rating="3"
                    totalRating="64"
                    price="59.00"
                    border={true}
                    bg="transparent"
                    stock={false}
                    stockAmount="60"
                    priceColor="yellow"
                    priceless="118.00"
                  />
                </div>
              ))}
            </div>
            <div className="mx-auto">
              <Pagination
                totalItems={product.length}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProductListPage;
