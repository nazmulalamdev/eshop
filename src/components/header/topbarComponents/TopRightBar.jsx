import React, { useEffect, useRef, useState, useTransition } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { TfiAngleDown } from "react-icons/tfi";
import { Link } from "react-router-dom";
import i18n from "../../../i18n";
import { CountriesData } from "../../../data/CountriesData";
import { CurrencyData } from "../../../data/CurrencyData";

const TopRightBar = () => {
  // const { t } = useTransition();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const countryRef = useRef(false);

  const handleCountry = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (country) => {
    setSelectedCountry(country);
  };

  useEffect(() => {
    const handleClickCountry = (event) => {
      // console.log(countryRef.current.contains(event.target));
      // console.log(event.target);

      if (countryRef.current && !countryRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickCountry);

    return () => {
      document.removeEventListener("mousedown", handleClickCountry);
    };
  }, []);

  const handleLanguageChange = (selectedCountry) => {
    i18n.changeLanguage(selectedCountry.value);
  };

  return (
    <>
      <div className="flex sm:justify-end justify-between items-center sm:gap-[49px]">
        <div>
          <select
            className="w-full sm:p-2.5 py-2.5 pr-2.5 dark:border-gray-600"
            name="currency"
          >
            {CurrencyData.map((item) => (
              <option key={item.label} value={item.code}>
                {item.symbol} {item.code}
              </option>
            ))}
          </select>
        </div>

        <div className="relaltive after:content-[''] after:absolute after:w-[1px] sm:after:h-8 after:h-4 after:bg-[#BFBFBF] sm:after:right-[295px] after:right-[265px] sm:after:top-1/2 after:top-[70%] after:-translate-y-1/2 before:content-[''] before:absolute before:w-[1px] sm:before:h-8 before:h-4 before:bg-[#BFBFBF] sm:before:right-[112px] before:right-[90px] sm:before:top-1/2 before:top-[70%] before:-translate-y-1/2">
          <select
            className="w-[150px] hidden"
            name="country"
            value={selectedCountry?.value}
            onChange={(e) => {
              const country = CountriesData.find(
                (c) => c.value === e.target.value
              );
              setSelectedCountry(country);
            }}
          >
            {CountriesData.map((country, index) => (
              <option key={index} value={country.value}>
                {country.name}
              </option>
            ))}
          </select>
          {/* Custom Dropdown */}
          <div
            className="w-[150px] p-2 cursor-pointer flex items-center"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {selectedCountry ? (
              <>
                <img
                  src={selectedCountry?.flag}
                  alt={selectedCountry?.name}
                  className="w-5 h-4 mr-2"
                />
                <span className="mr-6">{selectedCountry?.name}</span>
                <TfiAngleDown />
              </>
            ) : (
              <>
                <span className="mr-4">Select Country</span>
                <TfiAngleDown />
              </>
            )}
          </div>

          {/* Option List */}
          {isOpen && (
            <ul
              // defaultValue={option[0]} //new line
              ref={countryRef}
              onChange={handleLanguageChange}
              className="absolute border border-gray-300 bg-white shadow-lg z-10"
              onClick={handleCountry}
            >
              {CountriesData.map((country, index) => (
                <li
                  key={index}
                  className="w-[150px] flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleSelect(country)}
                >
                  <img
                    src={country?.flag}
                    alt={country?.name}
                    className="w-5 h-4 mr-2"
                  />
                  {country?.name}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex gap-4">
          <Link to="#">
            <FaFacebookF />
          </Link>
          <Link to="#">
            <FaTwitter />
          </Link>
          <Link to="#">
            <FaInstagram />
          </Link>
        </div>
      </div>
    </>
  );
};

export default TopRightBar;
