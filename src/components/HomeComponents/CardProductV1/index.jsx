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
    <div class="col">
      <div class="card card-product-v2 h-100">
        <div class="card-body position-relative">
          <div class="text-center position-relative">
            <a
              onClick={() => {
                navigate(`/shop/${product.id}`);
              }}
            >
              <img
                src={product.thumbnail}
                alt="Grocery Ecommerce Template"
                class="mb-3 img-fluid"
              />
            </a>

            <div class="product-action-btn">
              <a
                href="#!"
                class="btn-action mb-1"
                data-bs-toggle="modal"
                data-bs-target="#quickViewModal"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(pickProduct(product));
                }}
              >
                <i class="bi bi-eye"></i>
              </a>
              <a
                href="#!"
                class="btn-action mb-1"
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
                class="btn-action"
                data-bs-toggle="tooltip"
                data-bs-html="true"
                title="Compare"
              >
                <i class="bi bi-arrow-left-right"></i>
              </a>
            </div>
          </div>

          <h2 class="fs-6">
            <a href="#!" class="text-inherit text-decoration-none">
              {product.productName}
            </a>
          </h2>
          <div>
            <small class="text-warning">
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-half"></i>
            </small>
            <span class="text-muted small">4.4(694)</span>
          </div>

          <div class="d-flex justify-content-between align-items-center mt-3">
            <div>
              <span class="text-dark">${product.price}</span>
            </div>
            <div>
              <span class="text-uppercase small text-primary">In Stock</span>
            </div>
          </div>

          <div class="product-fade-block">
            <div class="d-grid mt-4">
              <a
                class="btn btn-primary rounded-pill"
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
          class="product-content-fade border-info"
          style={{ marginBottom: "-60px" }}
        ></div>
      </div>
    </div>
  );
};
export default CardProduct;
