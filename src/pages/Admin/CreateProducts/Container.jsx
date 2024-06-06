import React, { useEffect, useState } from "react";
import imageproduct from "../../../../assets/images/products/product-img-6.jpg";
import useHook from "./hooks/useHook";
import Select from "react-select";
import { useTranslation } from "react-i18next";

const Container = () => {
  const { t } = useTranslation();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectType, setSelectType] = useState([]);
  const handleChangeOptions = (selectOption) => {
    setSelectType(selectOption);
  };
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
  };
  const [input, setInput] = useState({
    name: "",
    detail: "",
    dimensions: "",
    cost: "",
  });

  const handleRemoveFile = (index) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const { categoryTypes, submit, loading } = useHook();
  const handleSubmit = (event) => {
    event.preventDefault();
    submit(selectedFiles, input, selectType);
  };

  useEffect(() => {
    const newOptions = categoryTypes.map((type) => ({
      value: type.id,
      label: type.name,
    }));
    setOptions(newOptions);
  }, [categoryTypes]);
  const [options, setOptions] = useState([]);
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="page-title-box">
            <h4 className="page-title">{t("Create Product")}</h4>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <form className="row" onSubmit={handleSubmit}>
                <div className="col-xl-6">
                  <div className="mb-3">
                    <label for="projectname" className="form-label">
                      {t("Name")}
                    </label>
                    <input
                      type="text"
                      value={input.name}
                      id="projectname"
                      className="form-control"
                      onChange={(e) =>
                        setInput({ ...input, name: e.target.value })
                      }
                      placeholder={t("Enter project name")}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label for="project-overview" className="form-label">
                      {t("Overview")}
                    </label>
                    <textarea
                      className="form-control"
                      id="project-overview"
                      value={input.detail}
                      onChange={(e) =>
                        setInput({ ...input, detail: e.target.value })
                      }
                      rows="5"
                      placeholder={t("Enter some brief about product...")}
                      required
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <label for="project-overview" className="form-label">
                      {t("Dimension")}
                    </label>
                    <input
                      className="form-control"
                      id="project-overview"
                      value={input.dimensions}
                      onChange={(e) =>
                        setInput({ ...input, dimensions: e.target.value })
                      }
                      rows="5"
                      placeholder={t("Enter dimensions")}
                      required
                    ></input>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">{t("Cost")}</label>
                    <input
                      type="number"
                      value={input.cost}
                      onChange={(e) =>
                        setInput({ ...input, cost: e.target.value })
                      }
                      className="form-control"
                      placeholder={t("Enter cost")}
                      required
                    />
                  </div>

                  <div className="mb-0">
                    <label for="project-overview" className="form-label">
                      {t("Categories")}
                    </label>
                    <Select
                      options={options}
                      isMulti
                      value={selectType}
                      onChange={handleChangeOptions}
                    />
                  </div>
                </div>

                <div className="col-xl-6">
                  <div className="mb-3 mt-3 mt-xl-0">
                    <label for="projectname" className="mb-0">
                      {t("Avatar")}
                    </label>
                    <p className="text-muted font-14">
                      {t("Recommended thumbnail size 800x400 (px).")}
                    </p>

                    <form>
                      <div className="form-group">
                        <label
                          className="upload-label d-block border border-primary rounded p-4"
                          htmlFor="fileInput"
                        >
                          {t("Drop files here or click to upload.")}
                        </label>
                        <input
                          type="file"
                          id="fileInput"
                          className="file-input d-none"
                          onChange={handleFileChange}
                          multiple
                          accept="image/*"
                        />
                      </div>
                      <div className="file-preview mt-3">
                        {selectedFiles.map((file, index) => (
                          <div
                            key={index}
                            className="d-flex align-items-center mb-2"
                          >
                            <img
                              src={URL.createObjectURL(file)}
                              alt={`Preview ${index}`}
                              className="img-thumbnail mr-2"
                              style={{
                                width: "100px",
                                height: "100px",
                                objectFit: "cover",
                              }}
                            />
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() => handleRemoveFile(index)}
                            >
                              {t("Remove")}
                            </button>
                          </div>
                        ))}
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
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;
