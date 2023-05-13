import React from "react";
import "./Pagination.css";

const Pagination = ({ totalItems, itemsPerPage, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination-nav">
      <ul className="pagination-pagination">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={
              currentPage === number ? "pagination-active" : "pagination-item"
            }
          >
            <a
              onClick={() => paginate(number)}
              href="!#"
              className="pagination-link"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;