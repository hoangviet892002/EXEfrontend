import React from "react";
import PropTypes from "prop-types";

const Pagination = ({ total, selected, onChange }) => {
  const handleClick = (page) => {
    if (onChange) {
      onChange(page);
    }
  };

  const renderPages = () => {
    let pages = [];
    const startPage = Math.max(1, selected - 4);
    const endPage = Math.min(total, selected + 5);

    if (startPage > 1) {
      pages.push(
        <li key={1} className="page-item">
          <a className="page-link" href="#" onClick={() => handleClick(1)}>
            1
          </a>
        </li>
      );
      if (startPage > 2) {
        pages.push(
          <li key="start-ellipsis" className="page-item">
            <span className="page-link">...</span>
          </li>
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <li key={i} className={`page-item ${i === selected ? "active" : ""}`}>
          <a className="page-link" href="#" onClick={() => handleClick(i)}>
            {i}
          </a>
        </li>
      );
    }

    if (endPage < total) {
      if (endPage < total - 1) {
        pages.push(
          <li key="end-ellipsis" className="page-item">
            <span className="page-link">...</span>
          </li>
        );
      }
      pages.push(
        <li key={total} className="page-item">
          <a className="page-link" href="#" onClick={() => handleClick(total)}>
            {total}
          </a>
        </li>
      );
    }

    return pages;
  };

  return (
    <div className="d-flex justify-content-center mt-3 mb-3">
      <ul className="pagination pagination-sm p-2">{renderPages()}</ul>
    </div>
  );
};

Pagination.propTypes = {
  total: PropTypes.number.isRequired,
  selected: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Pagination;
