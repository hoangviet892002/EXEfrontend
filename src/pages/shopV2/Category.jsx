import React from "react";
import { useDispatch } from "react-redux";
import { pickType } from "../../redux/actions/megaMenuAction";

const Category = ({ type }) => {
  const dispatch = useDispatch();
  return (
    <li className="nav-item">
      <a
        className="nav-link active"
        aria-current="page"
        href="#!"
        onClick={(e) => {
          e.preventDefault();
          dispatch(pickType(type.id));
        }}
      >
        {type.name}
      </a>
    </li>
  );
};

export default Category;
