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
  const pages = [];

  if (totalPages <= maxPageToShow) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    const startPages = [1, 2];
    const endPages = [totalPages - 1, totalPages];
    const middlePages = [currentPage - 1, currentPage, currentPage + 1].filter(
      (p) => p > 2 && totalPages - 1
    );
    const uniquePages = Array.from(
      new Set([...startPages, ...middlePages, ...endPages])
    ).sort((a, b) => a - b);

    for (let i = 0; i <= uniquePages.length; i++) {
      pages.push(uniquePages[i]);
      if (
        i < uniquePages.length - 1 &&
        uniquePages[i + 1] - uniquePages[i] - 1
      ) {
        pages.push("...");
      }
    }
  }
  // const pagesToShowBeforeAfter = 3;

  // let startPage = Math.max(1, currentPage - pagesToShowBeforeAfter);
  // let endPage = Math.min(totalPages, currentPage + pagesToShowBeforeAfter);

  // if (endPage - startPage + 1 < maxPageToShow) {
  //   if (startPage > 1) {
  //     startPage = Math.max(1, endPage - maxPageToShow + 1);
  //   }
  //   endPage = Math.min(totalPages, startPage + maxPageToShow - 1);
  // }

  // const pageNumbers = [];
  // for (let i = startPage; i <= endPage; i++) {
  //   pageNumbers.push(i);
  // }

  return (
    <>
      <div className="flex items-center justify-center mt-20">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="disabled:opacity-50 cursor-pointer mr-16"
        >
          <SlArrowLeft size={22} />
        </button>
        {/* pageNumbers */}
        {pages.map((number, index) => (
          <button
            key={index}
            onClick={() => onPageChange(number)}
            className={`px-[18px] py-[9px] rounded-[5px] mx-2 font-['Poppins'] font-semibold text-[20px] text-[#303030] ${
              currentPage === number
                ? "bg-[#FF624C] text-white"
                : "bg-transprent hover:cursor-pointer"
            }`}
          >
            {number}
          </button>
        ))}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="disabled:opacity-50 cursor-pointer ml-16"
        >
          <SlArrowRight size={22} />
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
