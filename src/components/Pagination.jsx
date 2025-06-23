import React from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const maxPageToShow = 10;
  const pagesToShowBeforeAfter = 3;

  let startPage = Math.max(1, currentPage - pagesToShowBeforeAfter);
  let endPage = Math.min(totalPages, currentPage + pagesToShowBeforeAfter);

  if (endPage - startPage + 1 < maxPageToShow) {
    if (startPage > 1) {
      startPage = Math.max(1, endPage - maxPageToShow + 1);
    }
    endPage = Math.min(totalPages, startPage + maxPageToShow - 1);
  }

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <div className="flaex items-center justify-center">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="disabled:opacity-50 cursor-pointer"
        >
          <SlArrowLeft size={32} />
        </button>

        {pageNumbers.map((number, index) => (
          <button
            key={index}
            onClick={() => onPageChange(number)}
            className={`px-[18px] py-[9px] rounded-[5px] mx-2 font-['Poppins'] font-semibold text-[20px] text-[#303030] ${
              currentPage === number
                ? "bg-[#FF624C] text-white"
                : "bg-gray-200 hover:bg-gray-400"
            }`}
          >
            {number}
          </button>
        ))}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-[18px] py-[9px] bg-gray-300 rounded-[5px] disabled:opacity-50 hover:bg-gray-500 cursor-pointer"
        >
          <SlArrowRight size={32} />
        </button>

        <span>
          Showing {(currentPage - 1) * itemsPerPage + 1} -
          {currentPage * itemsPerPage} of {totalItems} results.
        </span>
      </div>
    </>
  );
};

export default Pagination;
