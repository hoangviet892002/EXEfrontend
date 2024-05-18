import React from "react";
import imageproduct from "../../../../assets/images/products/product-img-6.jpg";
import { Link } from "react-router-dom";
const Container = () => {
  return (
    <>
      <div class="row">
        <div class="col-12">
          <div class="page-title-box">
            <h4 class="page-title">Product Details</h4>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-lg-5">
                  <a
                    href="javascript: void(0);"
                    class="text-center d-block mb-4"
                  >
                    <img
                      src={imageproduct}
                      class="img-fluid"
                      style={{ maxWidth: "280px" }}
                      alt="Product-img"
                    />
                  </a>

                  <div class="d-lg-flex d-none justify-content-center">
                    <a href="javascript: void(0);">
                      <img
                        src={imageproduct}
                        class="img-fluid img-thumbnail p-2"
                        style={{ maxWidth: "75px" }}
                        alt="Product-img"
                      />
                    </a>
                    <a href="javascript: void(0);" class="ms-2">
                      <img
                        src={imageproduct}
                        class="img-fluid img-thumbnail p-2"
                        style={{ maxWidth: "75px" }}
                        alt="Product-img"
                      />
                    </a>
                    <a href="javascript: void(0);" class="ms-2">
                      <img
                        src={imageproduct}
                        class="img-fluid img-thumbnail p-2"
                        style={{ maxWidth: "75px" }}
                        alt="Product-img"
                      />
                    </a>
                  </div>
                </div>

                <div class="col-lg-7">
                  <form class="ps-lg-4">
                    <h3 class="mt-0">
                      Amazing Modern Chair (Orange)
                      <Link to="edit" class="text-muted">
                        <i class="feather-icon icon-edit"></i>
                      </Link>
                    </h3>
                    <p class="mb-1">Added Date: 09/12/2018</p>
                    <p class="font-16">
                      <span class="text-warning mdi mdi-star"></span>
                      <span class="text-warning mdi mdi-star"></span>
                      <span class="text-warning mdi mdi-star"></span>
                      <span class="text-warning mdi mdi-star"></span>
                      <span class="text-warning mdi mdi-star"></span>
                    </p>

                    <div class="mt-3">
                      <h4>
                        <span class="badge badge-success-lighten">Instock</span>
                      </h4>
                    </div>

                    <div class="mt-4">
                      <h6 class="font-14">Retail Price:</h6>
                      <h3>$139.58</h3>
                    </div>

                    <div class="mt-4">
                      <h6 class="font-14">Description:</h6>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English.
                      </p>
                    </div>

                    <div class="mt-4">
                      <div class="row">
                        <div class="col-md-4">
                          <h6 class="font-14">Available Stock:</h6>
                          <p class="text-sm lh-150">1784</p>
                        </div>
                        <div class="col-md-4">
                          <h6 class="font-14">Number of Orders:</h6>
                          <p class="text-sm lh-150">5,458</p>
                        </div>
                        <div class="col-md-4">
                          <h6 class="font-14">Revenue:</h6>
                          <p class="text-sm lh-150">$8,57,014</p>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div class="table-responsive mt-4">
                <table class="table table-bordered table-centered mb-0">
                  <thead class="table-light">
                    <tr>
                      <th>Outlets</th>
                      <th>Price</th>
                      <th>Stock</th>
                      <th>Revenue</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>ASOS Ridley Outlet - NYC</td>
                      <td>$139.58</td>
                      <td>
                        <div class="progress-w-percent mb-0">
                          <span class="progress-value">478 </span>
                          <div class="progress progress-sm">
                            <div
                              class="progress-bar bg-success"
                              role="progressbar"
                              style={{ width: "56%" }}
                              aria-valuenow="56"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td>$1,89,547</td>
                    </tr>
                    <tr>
                      <td>Marco Outlet - SRT</td>
                      <td>$149.99</td>
                      <td>
                        <div class="progress-w-percent mb-0">
                          <span class="progress-value">73 </span>
                          <div class="progress progress-sm">
                            <div
                              class="progress-bar bg-danger"
                              role="progressbar"
                              style={{ width: "16%" }}
                              aria-valuenow="16"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td>$87,245</td>
                    </tr>
                    <tr>
                      <td>Chairtest Outlet - HY</td>
                      <td>$135.87</td>
                      <td>
                        <div class="progress-w-percent mb-0">
                          <span class="progress-value">781 </span>
                          <div class="progress progress-sm">
                            <div
                              class="progress-bar bg-success"
                              role="progressbar"
                              style={{ width: "72%" }}
                              aria-valuenow="72"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td>$5,87,478</td>
                    </tr>
                    <tr>
                      <td>Nworld Group - India</td>
                      <td>$159.89</td>
                      <td>
                        <div class="progress-w-percent mb-0">
                          <span class="progress-value">815 </span>
                          <div class="progress progress-sm">
                            <div
                              class="progress-bar bg-success"
                              role="progressbar"
                              style={{ width: "89%" }}
                              aria-valuenow="89"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td>$55,781</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;
