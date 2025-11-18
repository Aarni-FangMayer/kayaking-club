import React from "react";
import "./paginationControl.css";
import ArrowNext from "../../../assets/icons/pagination_arrow_next.png";
import ArrowPrev from "../../../assets/icons/pagination_arrow_prev.png";

const PaginationControl = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination_buttons">
      <button
        className="pagination_button pagination_buttons--prev"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <img src={ArrowPrev} alt="arrow button previous" />
      </button>
      <span className="pagination_buttons--text">
        {currentPage} / {totalPages}
      </span>
      <button
        className="pagination_button pagination_buttons--next"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <img src={ArrowNext} alt="arrow button next" />
      </button>
    </div>
  );
};

export default PaginationControl;
