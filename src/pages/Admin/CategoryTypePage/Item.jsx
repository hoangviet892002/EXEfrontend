import React from "react";
import imageproduct from "../../../../assets/images/products/product-img-6.jpg";
import { Link } from "react-router-dom";
import useHook from "./hooks/useHook";
const Item = ({ type }) => {
  const { deleteCategoryType, selectCategoryType } = useHook();
  const actionDelete = (e) => {
    e.preventDefault();
    deleteCategoryType(type.id);
  };
  const actionSelect = (e) => {
    e.preventDefault();
    selectCategoryType(type);
  };
  return (
    <tr>
      <td className="">
        <p className="m-0 d-inline-block align-middle font-16">
          <a href="apps-ecommerce-products-details.html" className="text-body">
            {type.name}
          </a>
          <br />
        </p>
      </td>
      <td className="table-action">
        <a
          href="javascript:void(0);"
          className="action-icon"
          onClick={actionSelect}
        >
          <i
            data-bs-toggle="modal"
            data-bs-target="#editCategoryModal"
            className="feather-icon icon-edit"
          ></i>
        </a>
        <a
          href="javascript:void(0);"
          className="action-icon"
          onClick={actionDelete}
        >
          <i className="feather-icon icon-trash-2"></i>
        </a>
      </td>
    </tr>
  );
};

export default Item;
