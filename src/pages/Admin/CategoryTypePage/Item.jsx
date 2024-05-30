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
        <p class="m-0 d-inline-block align-middle font-16">
          <a href="apps-ecommerce-products-details.html" class="text-body">
            {type.name}
          </a>
          <br />
        </p>
      </td>
      <td class="table-action">
        <a
          href="javascript:void(0);"
          class="action-icon"
          onClick={actionSelect}
        >
          <i
            data-bs-toggle="modal"
            data-bs-target="#editCategoryModal"
            class="feather-icon icon-edit"
          ></i>
        </a>
        <a
          href="javascript:void(0);"
          class="action-icon"
          onClick={actionDelete}
        >
          <i class="feather-icon icon-trash-2"></i>
        </a>
      </td>
    </tr>
  );
};

export default Item;
