import React from "react";

// eslint-disable-next-line react/prop-types
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (newPage) => {
    onPageChange(newPage);

    // Scroll ke atas dengan efek halus
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="mt-5 py-1 flex flex-col items-center justify-center sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <div className="flex items-center justify-center sm:justify-start">
        <p className="text-xs text-gray-700">
          Halaman
          <span className="font-bold text-blue-500"> {currentPage} </span>
          dari
          <span className="font-bold text-blue-500"> {totalPages} </span>
          Halaman
        </p>
      </div>
      <div className="flex items-center justify-center sm:justify-end mt-2 sm:mt-0">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className={`relative inline-flex items-center px-4 py-1 border border-gray-300 text-xs font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 ${
            currentPage === 1 ? "hidden" : ""
          }`}
        >
          Previous
        </button>
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          className={`ml-2 relative inline-flex items-center px-4 py-1 border border-gray-300 text-xs font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 ${
            currentPage === totalPages ? "hidden" : ""
          }`}
        >
          Next
        </button>
      </div>
    </nav>
  );
};

export default Pagination;
