import { useState } from "react";
import useHook from "./hooks/useHook";
const HeadDetail = () => {
  const handleAdd = (e) => {
    e.preventDefault();
    setQuantity(quantity + 1);
  };
  const handleSub = (e) => {
    e.preventDefault();
    if (quantity > 1) setQuantity(quantity - 1);
  };
  const {
    product,
    isWish,
    updateWish,
    quantity,
    setQuantity,
    handleAddtoCart,
  } = useHook();
  return (
    <>
      <section class="mt-8">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div
                id="productCarousel"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  {product.productImages.map((image, index) => (
                    <div
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                      key={index}
                    >
                      <img
                        src={image.imageUrl}
                        className="d-block w-100"
                        style={{ height: "400px" }}
                        alt={`Product ${index + 1}`}
                      />
                    </div>
                  ))}
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#productCarousel"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#productCarousel"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>

              <div class="product-tools">
                <div id="productThumbnails" class="thumbnails row g-3">
                  {product.productImages.map((image, index) => (
                    <div class="col-3">
                      <img
                        src={image.imageUrl}
                        class="thumbnails-img d-block w-100"
                        data-bs-target="#productCarousel"
                        data-bs-slide-to={index}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="ps-lg-10">
                <h1 class="mb-1">{product.productName}</h1>
                <div class="mb-4">
                  <small class="text-warning">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-half"></i>
                  </small>
                  <a href="#" class="ms-2">
                    (30 reviews)
                  </a>
                </div>
                <div class="fs-4">
                  <span class="fw-bold text-dark">${product.cost}</span>
                  {/* <span class="text-decoration-line-through text-muted">
                    $35
                  </span>
                  <span>
                    <small class="fs-6 ms-2 text-danger">26% Off</small>
                  </span> */}
                </div>

                <hr class="my-6" />
                {/* <div>
                  <button type="button" class="btn btn-outline-secondary">
                    250g
                  </button>

                  <button type="button" class="btn btn-outline-secondary">
                    500g
                  </button>

                  <button type="button" class="btn btn-outline-secondary">
                    1kg
                  </button>
                </div> */}
                <div class="mt-5 d-flex justify-content-start">
                  <div class="col-lg-2 col-3">
                    <div class="input-group flex-nowrap justify-content-center">
                      <input
                        onClick={handleSub}
                        type="button"
                        value="-"
                        class="button-minus form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0"
                        data-field="quantity"
                      />
                      <input
                        type="number"
                        step="1"
                        max="10"
                        value={quantity}
                        name="quantity"
                        class="quantity-field form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0"
                      />
                      <input
                        onClick={handleAdd}
                        type="button"
                        value="+"
                        class="button-plus form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0"
                        data-field="quantity"
                      />
                    </div>
                  </div>
                  <div class="ms-2 col-lg-4 col-5 d-grid">
                    <button
                      type="button"
                      class="btn btn-primary"
                      onClick={(e) => {
                        e.preventDefault();
                        handleAddtoCart();
                      }}
                    >
                      <i class="feather-icon icon-shopping-bag me-2"></i>Add to
                      cart
                    </button>
                  </div>
                  <div class="ms-2 col-4">
                    <a
                      class="btn btn-light"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="Wishlist"
                      onClick={(e) => {
                        e.preventDefault();
                        updateWish();
                      }}
                    >
                      <i
                        className={`bi ${
                          isWish ? "bi-heart-fill" : "bi-heart"
                        }`}
                      ></i>
                    </a>
                  </div>
                </div>

                <hr class="my-6" />
                <div>
                  <table class="table table-borderless">
                    <tbody>
                      <tr>
                        <td>Product Code:</td>
                        <td>{product.id}</td>
                      </tr>
                      <tr>
                        <td>Availability:</td>
                        <td>In Stock</td>
                      </tr>
                      <tr>
                        <table class="table table-striped table-centered mb-0">
                          <thead>
                            <tr>
                              <th>Type</th>
                            </tr>
                          </thead>
                          <tbody>
                            {product.category_type_id.map((type) => (
                              <>
                                <tr>
                                  <td>{type.name}</td>
                                </tr>
                              </>
                            ))}
                          </tbody>
                        </table>
                      </tr>
                      {/* <tr>
                        <td>Shipping:</td>
                        <td>
                          <small>
                            01 day shipping.
                            <span class="text-muted">( Free pickup today)</span>
                          </small>
                        </td>
                      </tr> */}
                    </tbody>
                  </table>
                </div>
                {/* <div class="mt-8">
                  <div class="dropdown">
                    <a
                      class="btn btn-outline-secondary dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Share
                    </a>

                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          <i class="bi bi-facebook me-2"></i>Facebook
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <i class="bi bi-twitter me-2"></i>Twitter
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <i class="bi bi-instagram me-2"></i>Instagram
                        </a>
                      </li>
                    </ul>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HeadDetail;
