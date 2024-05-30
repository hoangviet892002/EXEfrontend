import React, { useState } from "react";
import imageproduct from "../../../../assets/images/products/product-img-6.jpg";
import { Link } from "react-router-dom";
import useHook from "./hooks/useHook";
import "./style.css";
import AddImage from "./AddImage";
const Container = () => {
  const { product, loading, deleteImage } = useHook();
  const [selectPicture, setSelectPicture] = useState();
  const handleDeleteImage = (e) => {
    e.preventDefault();
    deleteImage(selectPicture);
  };

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
                    class="text-center d-block mb-4 hover-image"
                  >
                    <img
                      src={product.productImages[0].imageUrl}
                      class="img-fluid image-hover"
                      style={{ maxWidth: "280px" }}
                      alt="Product-img"
                    />
                    <div class="middle-hover">
                      <div
                        class="text-button-delete"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModalCenter"
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectPicture(product.productImages[0].id);
                        }}
                      >
                        Delete
                      </div>
                    </div>
                  </a>

                  <div class="d-lg-flex d-none justify-content-center">
                    {product.productImages.slice(1).map((image) => (
                      <a href="javascript: void(0);" class="hover-image ms-2">
                        <img
                          src={image.imageUrl}
                          class="image-hover img-fluid img-thumbnail p-2"
                          style={{ maxWidth: "75px" }}
                          alt="Product-img"
                        />
                        <div class="middle-hover">
                          <div
                            class="text-button-delete"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModalCenter"
                            onClick={(e) => {
                              e.preventDefault();
                              setSelectPicture(image.id);
                            }}
                          >
                            Delete
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="d-lg-flex d-none justify-content-center">
                    <button
                      type="button"
                      class="btn btn-primary "
                      data-bs-toggle="modal"
                      data-bs-target="#addImage"
                    >
                      AddImage
                    </button>
                  </div>
                </div>

                <div class="col-lg-7">
                  <form class="ps-lg-4">
                    <h3 class="mt-0">
                      {product.productName}
                      <Link to="edit" class="text-muted">
                        <i class="feather-icon icon-edit"></i>
                      </Link>
                    </h3>
                    <p class="mb-1">Added Date: {product.createdAt}</p>
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
                      <h3>${product.cost}</h3>
                    </div>

                    <div class="mt-4">
                      <h6 class="font-14 ">Description:</h6>
                      <p>{product.product_detail}</p>
                    </div>
                    <div class="mt-4">
                      <h6 class="font-14 ">Dimensions:</h6>
                      <p>{product.product_dimensions}</p>
                    </div>
                    {product.discount && (
                      <div class="mt-4">
                        <h6 class="font-14 ">Discount:</h6>
                        <p>{product.discount}</p>
                      </div>
                    )}
                    <div class="mt-4">
                      <table class="table table-striped table-centered mb-0">
                        <thead>
                          <tr>
                            <th>Type</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {product.category_type_id.map((type) => (
                            <>
                              {" "}
                              <tr>
                                <td>{type.name}</td>
                                <td class="table-action">
                                  <a
                                    href="javascript: void(0);"
                                    class="action-icon"
                                  >
                                    <i class="feather-icon icon-trash-2"></i>
                                  </a>
                                </td>
                              </tr>
                            </>
                          ))}
                        </tbody>
                      </table>
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
      {/* Model */}
      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalCenterTitle">
                Delete Image
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              Are you sure delete this image? {selectPicture}
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={handleDeleteImage}
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <AddImage />
    </>
  );
};

export default Container;
