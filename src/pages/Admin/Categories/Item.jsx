import React from "react";
import imageproduct from "../../../../assets/images/products/product-img-6.jpg";
import { Link, useNavigate } from "react-router-dom";
import useHook from "./hooks/useHook";
import { useTranslation } from "react-i18next";

const Item = ({ category }) => {
  const { deleteCategory, selectCategory } = useHook();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const actionDelete = (e) => {
    e.preventDefault();
    deleteCategory(category.id);
  };
  const actionSelect = (e) => {
    // e.preventDefault();
    selectCategory(category);
  };
  return (
    <tr>
      <td className="">
        <img
          src={category.imgUrl}
          alt="contact-img"
          title="contact-img"
          className="rounded me-3 "
          height="48"
        />
        <p className="m-0 d-inline-block align-middle font-16">
          <a href="apps-ecommerce-products-details.html" className="text-body">
            {category.name}
          </a>
          <br />
        </p>
      </td>
      <td className="table-action">
        <a
          href="javascript:void(0);"
          className="action-icon"
          onClick={() => {
            actionSelect();
            navigate(`${category.id}`);
          }}
        >
          <i className="feather-icon icon-eye"></i>
        </a>
        <a
          href="javascript:void(0);"
          className="action-icon"
          onClick={() => {
            actionSelect();
          }}
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
