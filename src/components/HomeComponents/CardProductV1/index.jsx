import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { pickProduct } from "../../../redux/actions/megaMenuAction";
import { addWish, removeWish } from "../../../redux/actions/wishAction";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { addToCart } from "../../../redux/actions/cartAction";

const CardProduct = ({ product }) => {
  const wishList = useSelector((state) => state.wish.wishlist);
  const isWish = wishList.some((item) => item.id === product.id);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="col">
      <div className="card card-product-v2 h-100">
        <div className="card-body position-relative">
          <div className="text-center position-relative">
            <a
              onClick={() => {
                navigate(`/shop/${product.id}`);
              }}
            >
              <img
                src={product.thumbnail}
                alt="Grocery Ecommerce Template"
                className="mb-3 img-fluid"
              />
            </a>

            <div className="product-action-btn">
              <a
                href="#!"
                className="btn-action mb-1"
                data-bs-toggle="modal"
                data-bs-target="#quickViewModal"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(pickProduct(product));
                }}
              >
                <i className="bi bi-eye"></i>
              </a>
              <a
                href="#!"
                className="btn-action mb-1"
                data-bs-toggle="tooltip"
                data-bs-html="true"
                title="Wishlist"
                onClick={(e) => {
                  e.preventDefault();
                  if (isWish) {
                    dispatch(removeWish(product.id));
                  } else {
                    dispatch(addWish(product));
                  }
                }}
              >
                <i
                  className={`bi ${isWish ? "bi-heart-fill" : "bi-heart"}`}
                ></i>
              </a>
              <a
                href="#!"
                className="btn-action"
                data-bs-toggle="tooltip"
                data-bs-html="true"
                title="Compare"
              >
                <i className="bi bi-arrow-left-right"></i>
              </a>
            </div>
          </div>

          <h2 className="fs-6">
            <a href="#!" className="text-inherit text-decoration-none">
              {product.productName}
            </a>
          </h2>
          <div>
            <small className="text-warning">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-half"></i>
            </small>
            <span className="text-muted small">4.4(694)</span>
          </div>

          <div className="d-flex justify-content-between align-items-center mt-3">
            <div>
              <span className="text-dark">${product.price}</span>
            </div>
            <div>
              <span className="text-uppercase small text-primary">
                In Stock
              </span>
            </div>
          </div>

          <div className="product-fade-block">
            <div className="d-grid mt-4">
              <a
                className="btn btn-primary rounded-pill"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(addToCart(product, 1));
                }}
              >
                Add to Cart
              </a>
            </div>
          </div>
        </div>

        <div
          className="product-content-fade border-info"
          style={{ marginBottom: "-60px" }}
        ></div>
      </div>
    </div>
  );
};
export default CardProduct;
