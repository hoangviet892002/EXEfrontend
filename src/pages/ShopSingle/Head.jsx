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
      <section className="mt-8">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div
                id="productCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
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
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#productCarousel"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#productCarousel"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

              <div className="product-tools">
                <div id="productThumbnails" className="thumbnails row g-3">
                  {product.productImages.map((image, index) => (
                    <div className="col-3" key={index}>
                      <img
                        src={image.imageUrl}
                        className="thumbnails-img d-block w-100"
                        data-bs-target="#productCarousel"
                        data-bs-slide-to={index}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="ps-lg-10">
                <h1 className="mb-1">{product.productName}</h1>
                <div className="mb-4">
                  <small className="text-warning">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                  </small>
                  <a href="#" className="ms-2">
                    (30 reviews)
                  </a>
                </div>
                <div className="fs-4">
                  <span className="fw-bold text-dark">${product.cost}</span>
                  {/* <span className="text-decoration-line-through text-muted">
                    $35
                  </span>
                  <span>
                    <small className="fs-6 ms-2 text-danger">26% Off</small>
                  </span> */}
                </div>

                <hr className="my-6" />
                {/* <div>
                  <button type="button" className="btn btn-outline-secondary">
                    250g
                  </button>

                  <button type="button" className="btn btn-outline-secondary">
                    500g
                  </button>

                  <button type="button" className="btn btn-outline-secondary">
                    1kg
                  </button>
                </div> */}
                <div className="mt-5 d-flex justify-content-start">
                  <div className="col-lg-2 col-3">
                    <div className="input-group flex-nowrap justify-content-center">
                      <input
                        onClick={handleSub}
                        type="button"
                        defaultValue="-"
                        className="button-minus form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0"
                        data-field="quantity"
                      />
                      <input
                        type="number"
                        step="1"
                        max="10"
                        defaultValue={quantity}
                        name="quantity"
                        className="quantity-field form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0"
                      />
                      <input
                        onClick={handleAdd}
                        type="button"
                        defaultValue="+"
                        className="button-plus form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0"
                        data-field="quantity"
                      />
                    </div>
                  </div>
                  <div className="ms-2 col-lg-4 col-5 d-grid">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={(e) => {
                        e.preventDefault();
                        handleAddtoCart();
                      }}
                    >
                      <i className="feather-icon icon-shopping-bag me-2"></i>Add
                      to cart
                    </button>
                  </div>
                  <div className="ms-2 col-4">
                    <a
                      className="btn btn-light"
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

                <hr className="my-6" />
                <div>
                  <table className="table table-borderless">
                    <tbody>
                      <tr>
                        <td>Product Code:</td>
                        <td>{product.id}</td>
                      </tr>
                      <tr>
                        <td>Availability:</td>
                        <td>In Stock</td>
                      </tr>
                    </tbody>
                  </table>

                  <table className="table table-striped table-centered mb-0">
                    <thead>
                      <tr>
                        <th>Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.category_type_id.map((type, index) => (
                        <tr key={index}>
                          <td>{type.name}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* <div className="mt-8">
                  <div className="dropdown">
                    <a
                      className="btn btn-outline-secondary dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Share
                    </a>

                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="bi bi-facebook me-2"></i>Facebook
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="bi bi-twitter me-2"></i>Twitter
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="bi bi-instagram me-2"></i>Instagram
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
