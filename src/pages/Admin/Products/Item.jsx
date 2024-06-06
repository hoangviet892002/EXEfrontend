import React from "react";
import imageproduct from "../../../../assets/images/products/product-img-6.jpg";
import { Link } from "react-router-dom";
import useHook from "./hooks/useHook";
import { useTranslation } from "react-i18next";

const Item = ({ product }) => {
  const { deleteProduct } = useHook();
  const { t } = useTranslation();
  return (
    <tr>
      <td>
        <img
          src={product.productImages[0].imageUrl}
          alt="contact-img"
          title="contact-img"
          className="rounded me-3"
          height="48"
        />
        <p className="m-0 d-inline-block align-middle font-16">
          <a href="apps-ecommerce-products-details.html" className="text-body">
            {product.productName}
          </a>
          <br />
        </p>
      </td>
      <td>{product.createdAt}</td>
      <td>${product.cost}</td>

      <td>
        {product.status ? (
          <span className="badge bg-success">{t("Active")}</span>
        ) : (
          <span className="badge bg-danger">{t("Deactive")}</span>
        )}
      </td>

      <td className="table-action">
        <Link to={`${product.id}`} className="action-icon">
          <i className="feather-icon icon-eye"></i>
        </Link>

        <a
          href="javascript:void(0);"
          className="action-icon"
          onClick={(e) => {
            e.preventDefault();
            deleteProduct(product.id);
          }}
        >
          <i className="feather-icon icon-trash-2"></i>
        </a>
      </td>
    </tr>
  );
};

export default Item;
