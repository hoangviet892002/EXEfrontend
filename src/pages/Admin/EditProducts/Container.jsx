import React, { useEffect, useState } from "react";
import useHook from "./hooks/useHook";
import ReactSelect from "react-select";
import { useTranslation } from "react-i18next";

const Container = () => {
  const { t } = useTranslation();
  const { product, setProduct, loading, categoryTypes, submit } = useHook();
  const [selectType, setSelectType] = useState([]);
  const handleChangeOptions = (selectOption) => {
    setSelectType(selectOption);
  };
  useEffect(() => {
    const newOptions = categoryTypes.map((type) => ({
      value: type.id,
      label: type.name,
    }));
    setOptions(newOptions);
    const type = product.category_type_id.map((type) => ({
      value: type.id,
      label: type.name,
    }));
    setSelectType(type);
  }, [categoryTypes]);

  const [options, setOptions] = useState([]);
  const handleUpdate = (e) => {
    e.preventDefault();
    submit(product, selectType);
  };
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="page-title-box">
            <h4 className="page-title">{t("Edit Product")}</h4>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <form className="col-xl-6" onSubmit={handleUpdate}>
                  <div className="mb-3">
                    <label htmlFor="projectname" className="form-label">
                      {t("Name")}
                    </label>
                    <input
                      type="text"
                      id="projectname"
                      value={product.productName}
                      onChange={(e) =>
                        setProduct({ ...product, productName: e.target.value })
                      }
                      className="form-control"
                      placeholder={t("Enter project name")}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="project-overview" className="form-label">
                      {t("Overview")}
                    </label>
                    <textarea
                      value={product.product_detail}
                      onChange={(e) =>
                        setProduct({
                          ...product,
                          product_detail: e.target.value,
                        })
                      }
                      className="form-control"
                      id="project-overview"
                      rows="5"
                      placeholder={t("Enter some brief about project..")}
                      required
                    ></textarea>
                  </div>

                  <div className="mb-3 position-relative">
                    <label className="form-label">{t("Dimension")}</label>
                    <input
                      type="text"
                      className="form-control"
                      value={product.product_dimensions}
                      onChange={(e) =>
                        setProduct({
                          ...product,
                          product_dimensions: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="project-budget" className="form-label">
                      {t("Cost")}
                    </label>
                    <input
                      type="number"
                      id="project-budget"
                      value={product.cost}
                      onChange={(e) =>
                        setProduct({
                          ...product,
                          cost: e.target.value,
                        })
                      }
                      className="form-control"
                      placeholder={t("Enter cost")}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="project-budget" className="form-label">
                      {t("Discount")}
                    </label>
                    <input
                      type="number"
                      id="project-budget"
                      value={product.discount}
                      onChange={(e) =>
                        setProduct({
                          ...product,
                          discount: e.target.value,
                        })
                      }
                      className="form-control"
                      placeholder={t("Enter cost")}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="project-overview" className="form-label">
                      {t("Categories")}
                    </label>
                    <ReactSelect
                      options={options}
                      isMulti
                      value={selectType}
                      onChange={handleChangeOptions}
                    />
                  </div>
                  {loading ? (
                    <button className="btn btn-primary" type="button" disabled>
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      {t("Loading...")}
                    </button>
                  ) : (
                    <button type="submit" className="btn btn-primary mt-3">
                      {t("Upload")}
                    </button>
                  )}
                </form>

                <div className="col-xl-6">
                  <div className="mb-3 mt-3 mt-xl-0">
                    <label htmlFor="projectname" className="mb-0">
                      {t("Avatar")}
                    </label>
                    <p className="text-muted font-14">
                      {t("Recommended thumbnail size 800x400 (px).")}
                    </p>

                    <form
                      action="https://coderthemes.com/"
                      method="post"
                      className="dropzone"
                      id="myAwesomeDropzone"
                      data-plugin="dropzone"
                      data-previews-container="#file-previews"
                      data-upload-preview-template="#uploadPreviewTemplate"
                    >
                      <div className="fallback">
                        <input name="file" type="file" />
                      </div>

                      <div className="dz-message needsclick">
                        <i className="h3 text-muted dripicons-cloud-upload"></i>
                        <h4>{t("Drop files here or click to upload.")}</h4>
                      </div>
                    </form>

                    <div
                      className="dropzone-previews mt-3"
                      id="file-previews"
                    ></div>

                    <div className="d-none" id="uploadPreviewTemplate">
                      <div className="card mt-1 mb-0 shadow-none border">
                        <div className="p-2">
                          <div className="row align-items-center">
                            <div className="col-auto">
                              <img
                                data-dz-thumbnail
                                src="#"
                                className="avatar-sm rounded bg-light"
                                alt=""
                              />
                            </div>
                            <div className="col ps-0">
                              <a
                                href="javascript:void(0);"
                                className="text-muted fw-bold"
                                data-dz-name
                              ></a>
                              <p className="mb-0" data-dz-size></p>
                            </div>
                            <div className="col-auto">
                              <a
                                href="#"
                                className="btn btn-link btn-lg text-muted"
                                data-dz-remove
                              >
                                <i className="dripicons-cross"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3 position-relative" id="datepicker2">
                    <label className="form-label">{t("Due Date")}</label>
                    <input
                      type="text"
                      className="form-control"
                      data-provide="datepicker"
                      data-date-container="#datepicker2"
                      data-date-format="d-M-yyyy"
                      data-date-autoclose="true"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;
