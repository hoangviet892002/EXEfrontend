import React from "react";
import Category from "./Category";

const Categories = ({ index, category }) => {
  return (
    <li
      className="nav-item border-bottom w-100 collapsed"
      data-bs-toggle="collapse"
      data-bs-target={`#${index}`}
      aria-expanded="false"
      aria-controls={`${index}`}
    >
      <a href="#" className="nav-link">
        {category.name}
        <i className="feather-icon icon-chevron-right"></i>
      </a>

      <div
        id={`${index}`}
        className="accordion-collapse collapse"
        data-bs-parent="#categoryCollapseMenu"
      >
        <div>
          <ul className="nav flex-column ms-3">
            {category.categoryTypes.map((type) => (
              <Category type={type} />
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default Categories;
