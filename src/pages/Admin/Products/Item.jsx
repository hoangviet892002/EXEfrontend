import React from "react";
import imageproduct from "../../../../assets/images/products/product-img-6.jpg";
import { Link } from "react-router-dom";
import useHook from "./hooks/useHook";
const Item = ({ product }) => {
  const { deleteProduct } = useHook();
  return (
    <tr>
      <td>
        <img
          src={product.productImages[0].imageUrl}
          alt="contact-img"
          title="contact-img"
          class="rounded me-3"
          height="48"
        />
        <p class="m-0 d-inline-block align-middle font-16">
          <a href="apps-ecommerce-products-details.html" class="text-body">
            {product.productName}
          </a>
          <br />
        </p>
      </td>
      <td>{product.createdAt}</td>
      <td>${product.cost}</td>

      <td>
        {product.status ? (
          <span class="badge bg-success">Active</span>
        ) : (
          <span class="badge bg-danger">Deactive</span>
        )}
      </td>

      <td class="table-action">
        <Link to={`${product.id}`} class="action-icon">
          <i class="feather-icon icon-eye"></i>
        </Link>

        <a
          href="javascript:void(0);"
          class="action-icon"
          onClick={(e) => {
            e.preventDefault();
            deleteProduct(product.id);
          }}
        >
          <i class="feather-icon icon-trash-2"></i>
        </a>
      </td>
    </tr>
  );
};

export default Item;
