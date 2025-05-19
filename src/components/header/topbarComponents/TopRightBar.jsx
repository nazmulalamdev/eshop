import React, { useEffect, useRef, useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { TfiAngleDown } from "react-icons/tfi";
import { Link } from "react-router-dom";

const TopRightBar = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const countryRef = useRef(false);

  const handleCountry = () => {
    setIsOpen(!isOpen);
  };

  const countries = [
    {
      name: "United States",
      value: "US",
      flag: "https://flagcdn.com/16x12/us.png",
    },
    { name: "Canada", value: "CA", flag: "https://flagcdn.com/16x12/ca.png" },
    {
      name: "United Kingdom",
      value: "GB",
      flag: "https://flagcdn.com/16x12/gb.png",
    },
    {
      name: "Australia",
      value: "AU",
      flag: "https://flagcdn.com/16x12/au.png",
    },
    { name: "Germany", value: "DE", flag: "https://flagcdn.com/16x12/de.png" },
    { name: "France", value: "FR", flag: "https://flagcdn.com/16x12/fr.png" },
  ];

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

  return (
    <>
      <div className="flex justify-end items-center gap-[49px]">
        <div>
          <select className="w-full p-2.5 dark:border-gray-600" name="currency">
            <option value="USD">USD</option>
            <option value="CAD">CAD</option>
            <option value="GPB">GPB</option>
            <option value="AUD">AUD</option>
            <option value="EUR">EUR</option>
          </select>
        </div>

        <div className="relaltive after:content-[''] after:absolute after:w-[1px] after:h-[32px] after:bg-[#BFBFBF] after:right-[295px] after:top-[50%] after:-translate-y-1/2 before:content-[''] before:absolute before:w-[1px] before:h-[32px] before:bg-[#BFBFBF] before:right-[112px] before:top-[50%] before:-translate-y-1/2">
          <select
            className="w-[150px] hidden"
            name="country"
            value={selectedCountry?.value}
            onChange={(e) => {
              const country = countries.find((c) => c.value === e.target.value);
              setSelectedCountry(country);
            }}
          >
            {countries.map((country, index) => (
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
              ref={countryRef}
              className="absolute border border-gray-300 bg-white shadow-lg z-10"
              onClick={handleCountry}
            >
              {countries.map((country, index) => (
                <li
                  key={index}
                  className="w-[150px] flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleSelect(country)}
                >
                  <img
                    src={country?.flag}
                    alt={country?.name}
                    className="w-4 h-4 mr-2"
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
