import React, { useState } from "react";
import imageproduct from "../../../../assets/images/products/product-img-6.jpg";
import { Link } from "react-router-dom";
import useHook from "./hooks/useHook";
import "./style.css";
import AddImage from "./AddImage";
import { useTranslation } from "react-i18next";

const Container = () => {
  const { t } = useTranslation();
  const { product, loading, deleteImage } = useHook();
  const [selectPicture, setSelectPicture] = useState();
  const handleDeleteImage = (e) => {
    e.preventDefault();
    deleteImage(selectPicture);
  };

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="page-title-box">
            <h4 className="page-title">{t("Product Details")}</h4>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-5">
                  <a
                    href="javascript: void(0);"
                    className="text-center d-block mb-4 hover-image"
                  >
                    <img
                      src={product.productImages[0].imageUrl}
                      className="img-fluid image-hover"
                      style={{ maxWidth: "280px" }}
                      alt="Product-img"
                    />
                    <div className="middle-hover">
                      <div
                        className="text-button-delete"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModalCenter"
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectPicture(product.productImages[0].id);
                        }}
                      >
                        {t("Delete")}
                      </div>
                    </div>
                  </a>

                  <div className="d-lg-flex d-none justify-content-center">
                    {product.productImages.slice(1).map((image) => (
                      <a
                        href="javascript: void(0);"
                        className="hover-image ms-2"
                      >
                        <img
                          src={image.imageUrl}
                          className="image-hover img-fluid img-thumbnail p-2"
                          style={{ maxWidth: "75px" }}
                          alt="Product-img"
                        />
                        <div className="middle-hover">
                          <div
                            className="text-button-delete"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModalCenter"
                            onClick={(e) => {
                              e.preventDefault();
                              setSelectPicture(image.id);
                            }}
                          >
                            {t("Delete")}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="d-lg-flex d-none justify-content-center">
                    <button
                      type="button"
                      className="btn btn-primary "
                      data-bs-toggle="modal"
                      data-bs-target="#addImage"
                    >
                      {t("Add Image")}
                    </button>
                  </div>
                </div>

                <div className="col-lg-7">
                  <form className="ps-lg-4">
                    <h3 className="mt-0">
                      {product.productName}
                      <Link to="edit" className="text-muted">
                        <i className="feather-icon icon-edit"></i>
                      </Link>
                    </h3>
                    <p className="mb-1">{t("Added Date:")}{product.createdAt}</p>
                    <p className="font-16">
                      <span className="text-warning mdi mdi-star"></span>
                      <span className="text-warning mdi mdi-star"></span>
                      <span className="text-warning mdi mdi-star"></span>
                      <span className="text-warning mdi mdi-star"></span>
                      <span className="text-warning mdi mdi-star"></span>
                    </p>

                    <div className="mt-3">
                      <h4>
                        <span className="badge badge-success-lighten">
                          {t("Instock")}
                        </span>
                      </h4>
                    </div>

                    <div className="mt-4">
                      <h6 className="font-14">{t("Retail Price:")}</h6>
                      <h3>${product.cost}</h3>
                    </div>

                    <div className="mt-4">
                      <h6 className="font-14 ">{t("Description:")}</h6>
                      <p>{product.product_detail}</p>
                    </div>
                    <div className="mt-4">
                      <h6 className="font-14 ">{t("Dimensions:")}</h6>
                      <p>{product.product_dimensions}</p>
                    </div>
                    {product.discount && (
                      <div className="mt-4">
                        <h6 className="font-14 ">{t("Discount:")}</h6>
                        <p>{product.discount}</p>
                      </div>
                    )}
                    <div className="mt-4">
                      <table className="table table-striped table-centered mb-0">
                        <thead>
                          <tr>
                            <th>{t("Type")}</th>
                            <th>{t("Action")}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {product.category_type_id.map((type) => (
                            <tr key={type.id}>
                              <td>{type.name}</td>
                              <td className="table-action">
                                <a
                                  href="javascript: void(0);"
                                  className="action-icon"
                                >
                                  <i className="feather-icon icon-trash-2"></i>
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-4">
                      <div className="row">
                        <div className="col-md-4">
                          <h6 className="font-14">{t("Available Stock:")}</h6>
                          <p className="text-sm lh-150">1784</p>
                        </div>
                        <div className="col-md-4">
                          <h6 className="font-14">{t("Number of Orders:")}</h6>
                          <p className="text-sm lh-150">5,458</p>
                        </div>
                        <div className="col-md-4">
                          <h6 className="font-14">{t("Revenue:")}</h6>
                          <p className="text-sm lh-150">$8,57,014</p>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="table-responsive mt-4">
                <table className="table table-bordered table-centered mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>{t("Outlets")}</th>
                      <th>{t("Price")}</th>
                      <th>{t("Stock")}</th>
                      <th>{t("Revenue")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>ASOS Ridley Outlet - NYC</td>
                      <td>$139.58</td>
                      <td>
                        <div className="progress-w-percent mb-0">
                          <span className="progress-value">478 </span>
                          <div className="progress progress-sm">
                            <div
                              className="progress-bar bg-success"
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
                        <div className="progress-w-percent mb-0">
                          <span className="progress-value">73 </span>
                          <div className="progress progress-sm">
                            <div
                              className="progress-bar bg-danger"
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
                        <div className="progress-w-percent mb-0">
                          <span className="progress-value">781 </span>
                          <div className="progress progress-sm">
                            <div
                              className="progress-bar bg-success"
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
                        <div className="progress-w-percent mb-0">
                          <span className="progress-value">815 </span>
                          <div className="progress progress-sm">
                            <div
                              className="progress-bar bg-success"
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
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle">
                {t("Delete Image")}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {t("Are you sure delete this image?")} {selectPicture}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                {t("Close")}
              </button>
              <button
                onClick={handleDeleteImage}
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                {t("Delete")}
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
