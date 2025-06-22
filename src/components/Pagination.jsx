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
          className="p-[18px] bg-gray-300 rounded-[5px] disabled:opacity-50 hover:bg-gray-500 cursor-pointer"
        >
          <SlArrowLeft />
        </button>

        {pageNumbers.map((number, index) => (
          <button
            key={index}
            onClick={() => onPageChange(number)}
            className={`p-[10px] rounded-[5px] ${
              currentPage === number
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-400"
            }`}
          >
            {number}
          </button>
        ))}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-[18px] bg-gray-300 rounded-[5px] disabled:opacity-50 hover:bg-gray-500 cursor-pointer"
        >
          <SlArrowRight />
        </button>
      </div>
    </>
  );
};

export default Pagination;
