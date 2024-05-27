import React from "react";
import imageproduct from "../../../../assets/images/products/product-img-6.jpg";
import { Link } from "react-router-dom";
const Item = () => {
  return (
    <tr>
      <td className="">
        <img
          src={imageproduct}
          alt="contact-img"
          title="contact-img"
          class="rounded me-3 "
          height="48"
        />
        <p class="m-0 d-inline-block align-middle font-16">
          <a href="apps-ecommerce-products-details.html" class="text-body">
            Amazing Modern Chair
          </a>
          <br />
        </p>
      </td>
      <td class="table-action">
        <Link to={`id`} class="action-icon">
          <i class="feather-icon icon-eye"></i>
        </Link>
        <Link to={`id/edit`} class="action-icon">
          <i class="feather-icon icon-edit"></i>
        </Link>
        <a href="javascript:void(0);" class="action-icon">
          <i class="feather-icon icon-trash-2"></i>
        </a>
      </td>
    </tr>
  );
};

export default Item;
