import { Reviews } from "../../components";
import useHook from "./hooks/useHook";
const InforScreens = () => {
  const { product } = useHook();
  return (
    <>
      <section className="mt-lg-14 mt-8">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul
                className="nav nav-pills nav-lb-tab"
                id="myTab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="product-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#product-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="product-tab-pane"
                    aria-selected="true"
                  >
                    Product Details
                  </button>
                </li>

                {/* <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="details-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#details-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="details-tab-pane"
                    aria-selected="false"
                  >
                    Information
                  </button>
                </li> */}

                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="reviews-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#reviews-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="reviews-tab-pane"
                    aria-selected="false"
                  >
                    Reviews
                  </button>
                </li>
              </ul>

              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="product-tab-pane"
                  role="tabpanel"
                  aria-labelledby="product-tab"
                  tabIndex="0"
                >
                  <div className="my-8">{product.product_detail}</div>
                </div>

                {/* <div
                  className="tab-pane fade"
                  id="details-tab-pane"
                  role="tabpanel"
                  aria-labelledby="details-tab"
                  tabIndex="0"
                >
                  <div className="my-8">
                    <div className="row">
                      <div className="col-12">
                        <h4 className="mb-4">Details</h4>
                      </div>
                      <div className="col-12 col-lg-6">
                        <table className="table table-striped">
                          <tbody>
                            <tr>
                              <th>Weight</th>
                              <td>1000 Grams</td>
                            </tr>
                            <tr>
                              <th>Ingredient Type</th>
                              <td>Vegetarian</td>
                            </tr>
                            <tr>
                              <th>Brand</th>
                              <td>Dmart</td>
                            </tr>
                            <tr>
                              <th>Item Package Quantity</th>
                              <td>1</td>
                            </tr>
                            <tr>
                              <th>Form</th>
                              <td>Larry the Bird</td>
                            </tr>
                            <tr>
                              <th>Manufacturer</th>
                              <td>Dmart</td>
                            </tr>
                            <tr>
                              <th>Net Quantity</th>
                              <td>340.0 Gram</td>
                            </tr>
                            <tr>
                              <th>Product Dimensions</th>
                              <td>9.6 x 7.49 x 18.49 cm</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="col-12 col-lg-6">
                        <table className="table table-striped">
                          <tbody>
                            <tr>
                              <th>ASIN</th>
                              <td>SB0025UJ75W</td>
                            </tr>
                            <tr>
                              <th>Best Sellers Rank</th>
                              <td>#2 in Fruits</td>
                            </tr>
                            <tr>
                              <th>Date First Available</th>
                              <td>30 April 2022</td>
                            </tr>
                            <tr>
                              <th>Item Weight</th>
                              <td>500g</td>
                            </tr>
                            <tr>
                              <th>Generic Name</th>
                              <td>Banana Robusta</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div> */}

                <div
                  className="tab-pane fade"
                  id="reviews-tab-pane"
                  role="tabpanel"
                  aria-labelledby="reviews-tab"
                  tabIndex="0"
                >
                  <div className="my-8">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="me-lg-12 mb-6 mb-md-0">
                          <div className="mb-5">
                            <h4 className="mb-3">Customer reviews</h4>
                            <span>
                              <small className="text-warning">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-half"></i>
                              </small>
                              <span className="ms-3">4.1 out of 5</span>
                              <small className="ms-3">
                                11,130 global ratings
                              </small>
                            </span>
                          </div>
                          <div className="mb-8">
                            <div className="d-flex align-items-center mb-2">
                              <div className="text-nowrap me-3 text-muted">
                                <span className="d-inline-block align-middle text-muted">
                                  5
                                </span>
                                <i className="bi bi-star-fill ms-1 small text-warning"></i>
                              </div>
                              <div className="w-100">
                                <div
                                  className="progress"
                                  style={{
                                    height: "6px",
                                  }}
                                >
                                  <div
                                    className="progress-bar bg-warning"
                                    role="progressbar"
                                    style={{
                                      width: "60%",
                                    }}
                                    aria-valuenow="60"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                              <span className="text-muted ms-3">53%</span>
                            </div>

                            <div className="d-flex align-items-center mb-2">
                              <div className="text-nowrap me-3 text-muted">
                                <span className="d-inline-block align-middle text-muted">
                                  4
                                </span>
                                <i className="bi bi-star-fill ms-1 small text-warning"></i>
                              </div>
                              <div className="w-100">
                                <div
                                  className="progress"
                                  style={{
                                    height: "6px",
                                  }}
                                >
                                  <div
                                    className="progress-bar bg-warning"
                                    role="progressbar"
                                    style={{
                                      width: "50%",
                                    }}
                                    aria-valuenow="50"
                                    aria-valuemin="0"
                                    aria-valuemax="50"
                                  ></div>
                                </div>
                              </div>
                              <span className="text-muted ms-3">22%</span>
                            </div>

                            <div className="d-flex align-items-center mb-2">
                              <div className="text-nowrap me-3 text-muted">
                                <span className="d-inline-block align-middle text-muted">
                                  3
                                </span>
                                <i className="bi bi-star-fill ms-1 small text-warning"></i>
                              </div>
                              <div className="w-100">
                                <div
                                  className="progress"
                                  style={{
                                    height: "6px",
                                  }}
                                >
                                  <div
                                    className="progress-bar bg-warning"
                                    role="progressbar"
                                    style={{
                                      width: "35%",
                                    }}
                                    aria-valuenow="35"
                                    aria-valuemin="0"
                                    aria-valuemax="35"
                                  ></div>
                                </div>
                              </div>
                              <span className="text-muted ms-3">14%</span>
                            </div>

                            <div className="d-flex align-items-center mb-2">
                              <div className="text-nowrap me-3 text-muted">
                                <span className="d-inline-block align-middle text-muted">
                                  2
                                </span>
                                <i className="bi bi-star-fill ms-1 small text-warning"></i>
                              </div>
                              <div className="w-100">
                                <div
                                  className="progress"
                                  style={{
                                    height: "6px",
                                  }}
                                >
                                  <div
                                    className="progress-bar bg-warning"
                                    role="progressbar"
                                    style={{
                                      width: "22%",
                                    }}
                                    aria-valuenow="22"
                                    aria-valuemin="0"
                                    aria-valuemax="22"
                                  ></div>
                                </div>
                              </div>
                              <span className="text-muted ms-3">5%</span>
                            </div>

                            <div className="d-flex align-items-center mb-2">
                              <div className="text-nowrap me-3 text-muted">
                                <span className="d-inline-block align-middle text-muted">
                                  1
                                </span>
                                <i className="bi bi-star-fill ms-1 small text-warning"></i>
                              </div>
                              <div className="w-100">
                                <div
                                  className="progress"
                                  style={{
                                    height: "6px",
                                  }}
                                >
                                  <div
                                    className="progress-bar bg-warning"
                                    role="progressbar"
                                    style={{
                                      width: "14%",
                                    }}
                                    aria-valuenow="14"
                                    aria-valuemin="0"
                                    aria-valuemax="14"
                                  ></div>
                                </div>
                              </div>
                              <span className="text-muted ms-3">7%</span>
                            </div>
                          </div>
                          <div className="d-grid">
                            <h4>Review this product</h4>
                            <p className="mb-0">
                              Share your thoughts with other customers.
                            </p>
                            <a
                              href="#"
                              className="btn btn-outline-gray-400 mt-4 text-muted"
                            >
                              Write the Review
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-8">
                        <div className="mb-10">
                          <div className="d-flex justify-content-between align-items-center mb-8">
                            <div>
                              <h4>Reviews</h4>
                            </div>
                          </div>
                          <Reviews />
                          <Reviews />
                          <Reviews />

                          <div>
                            <a
                              href="#"
                              className="btn btn-outline-gray-400 text-muted"
                            >
                              Read More Reviews
                            </a>
                          </div>
                        </div>
                        <div>
                          <h3 className="mb-5">Create Review</h3>
                          <div className="border-bottom py-4 mb-4">
                            <h4 className="mb-3">Overall rating</h4>
                            <div id="rater"></div>
                          </div>
                          <div className="border-bottom py-4 mb-4">
                            <h4 className="mb-0">Rate Features</h4>
                            <div className="my-5">
                              <h5>Flavor</h5>
                              <div id="rate-2"></div>
                            </div>
                            <div className="my-5">
                              <h5>Value for money</h5>
                              <div id="rate-3"></div>
                            </div>
                            <div className="my-5">
                              <h5>Scent</h5>
                              <div id="rate-4"></div>
                            </div>
                          </div>

                          <div className="border-bottom py-4 mb-4">
                            <h5>Add a headline</h5>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="What’s most important to know"
                            />
                          </div>
                          <div className="border-bottom py-4 mb-4">
                            <h5>Add a photo or video</h5>
                            <p>
                              Shoppers find images and videos more helpful than
                              text alone.
                            </p>

                            <form
                              action="#"
                              className="dropzone profile-dropzone"
                            >
                              <div className="fallback">
                                <input name="file" type="file" multiple />
                              </div>
                            </form>
                          </div>
                          <div className="py-4 mb-4">
                            <h5>Add a written review</h5>
                            <textarea
                              className="form-control"
                              rows="3"
                              placeholder="What did you like or dislike? What did you use this product for?"
                            ></textarea>
                          </div>

                          <div className="d-flex justify-content-end">
                            <a href="#" className="btn btn-primary">
                              Submit Review
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="sellerInfo-tab-pane"
                  role="tabpanel"
                  aria-labelledby="sellerInfo-tab"
                  tabIndex="0"
                >
                  ...
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default InforScreens;
