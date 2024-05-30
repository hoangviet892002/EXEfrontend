import React, { useEffect, useState } from "react";
import useHook from "./hooks/useHook";
import ReactSelect from "react-select";

const Container = () => {
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
      <div class="row">
        <div class="col-12">
          <div class="page-title-box">
            <h4 class="page-title">Edit Product</h4>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <form class="col-xl-6" onSubmit={handleUpdate}>
                  <div class="mb-3">
                    <label for="projectname" class="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      id="projectname"
                      value={product.productName}
                      onChange={(e) =>
                        setProduct({ ...product, productName: e.target.value })
                      }
                      class="form-control"
                      placeholder="Enter project name"
                      required
                    />
                  </div>

                  <div class="mb-3">
                    <label for="project-overview" class="form-label">
                      Overview
                    </label>
                    <textarea
                      value={product.product_detail}
                      onChange={(e) =>
                        setProduct({
                          ...product,
                          product_detail: e.target.value,
                        })
                      }
                      class="form-control"
                      id="project-overview"
                      rows="5"
                      placeholder="Enter some brief about project.."
                      required
                    ></textarea>
                  </div>

                  <div class="mb-3 position-relative">
                    <label class="form-label">Dimension</label>
                    <input
                      type="text"
                      class="form-control"
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

                  <div class="mb-3">
                    <label for="project-budget" class="form-label">
                      Cost
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
                      class="form-control"
                      placeholder="Enter cost"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="project-budget" class="form-label">
                      Discount
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
                      class="form-control"
                      placeholder="Enter cost"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="project-overview" class="form-label">
                      Categories
                    </label>
                    <ReactSelect
                      options={options}
                      isMulti
                      value={selectType}
                      onChange={handleChangeOptions}
                    />
                  </div>
                  {loading ? (
                    <button class="btn btn-primary" type="button" disabled>
                      <span
                        class="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Loading...
                    </button>
                  ) : (
                    <button type="submit" className="btn btn-primary mt-3">
                      Upload
                    </button>
                  )}
                </form>

                <div class="col-xl-6">
                  <div class="mb-3 mt-3 mt-xl-0">
                    <label for="projectname" class="mb-0">
                      Avatar
                    </label>
                    <p class="text-muted font-14">
                      Recommended thumbnail size 800x400 (px).
                    </p>

                    <form
                      action="https://coderthemes.com/"
                      method="post"
                      class="dropzone"
                      id="myAwesomeDropzone"
                      data-plugin="dropzone"
                      data-previews-container="#file-previews"
                      data-upload-preview-template="#uploadPreviewTemplate"
                    >
                      <div class="fallback">
                        <input name="file" type="file" />
                      </div>

                      <div class="dz-message needsclick">
                        <i class="h3 text-muted dripicons-cloud-upload"></i>
                        <h4>Drop files here or click to upload.</h4>
                      </div>
                    </form>

                    <div
                      class="dropzone-previews mt-3"
                      id="file-previews"
                    ></div>

                    <div class="d-none" id="uploadPreviewTemplate">
                      <div class="card mt-1 mb-0 shadow-none border">
                        <div class="p-2">
                          <div class="row align-items-center">
                            <div class="col-auto">
                              <img
                                data-dz-thumbnail
                                src="#"
                                class="avatar-sm rounded bg-light"
                                alt=""
                              />
                            </div>
                            <div class="col ps-0">
                              <a
                                href="javascript:void(0);"
                                class="text-muted fw-bold"
                                data-dz-name
                              ></a>
                              <p class="mb-0" data-dz-size></p>
                            </div>
                            <div class="col-auto">
                              <a
                                href="#"
                                class="btn btn-link btn-lg text-muted"
                                data-dz-remove
                              >
                                <i class="dripicons-cross"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="mb-3 position-relative" id="datepicker2">
                    <label class="form-label">Due Date</label>
                    <input
                      type="text"
                      class="form-control"
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
