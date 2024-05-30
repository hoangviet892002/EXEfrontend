import React, { useEffect, useState } from "react";
import imageproduct from "../../../../assets/images/products/product-img-6.jpg";
import useHook from "./hooks/useHook";
import Select from "react-select";

const Container = () => {
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
      <div class="row">
        <div class="col-12">
          <div class="page-title-box">
            <h4 class="page-title">Create Product</h4>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <form class="row" onSubmit={handleSubmit}>
                <div class="col-xl-6">
                  <div class="mb-3">
                    <label for="projectname" class="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      value={input.name}
                      id="projectname"
                      class="form-control"
                      onChange={(e) =>
                        setInput({ ...input, name: e.target.value })
                      }
                      placeholder="Enter project name"
                      required
                    />
                  </div>

                  <div class="mb-3">
                    <label for="project-overview" class="form-label">
                      Overview
                    </label>
                    <textarea
                      class="form-control"
                      id="project-overview"
                      value={input.detail}
                      onChange={(e) =>
                        setInput({ ...input, detail: e.target.value })
                      }
                      rows="5"
                      placeholder="Enter some brief about product..."
                      required
                    ></textarea>
                  </div>
                  <div class="mb-3">
                    <label for="project-overview" class="form-label">
                      Dimension
                    </label>
                    <input
                      class="form-control"
                      id="project-overview"
                      value={input.dimensions}
                      onChange={(e) =>
                        setInput({ ...input, dimensions: e.target.value })
                      }
                      rows="5"
                      placeholder="Enter dimensions"
                      required
                    ></input>
                  </div>

                  <div class="mb-3">
                    <label class="form-label">Cost</label>
                    <input
                      type="number"
                      value={input.cost}
                      onChange={(e) =>
                        setInput({ ...input, cost: e.target.value })
                      }
                      class="form-control"
                      placeholder="Enter cost"
                      required
                    />
                  </div>

                  <div class="mb-0">
                    <label for="project-overview" class="form-label">
                      Categories
                    </label>
                    <Select
                      options={options}
                      isMulti
                      value={selectType}
                      onChange={handleChangeOptions}
                    />
                  </div>
                </div>

                <div class="col-xl-6">
                  <div class="mb-3 mt-3 mt-xl-0">
                    <label for="projectname" class="mb-0">
                      Avatar
                    </label>
                    <p class="text-muted font-14">
                      Recommended thumbnail size 800x400 (px).
                    </p>

                    <form>
                      <div className="form-group">
                        <label
                          className="upload-label d-block border border-primary rounded p-4"
                          htmlFor="fileInput"
                        >
                          Drop files here or click to upload.
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
                              Remove
                            </button>
                          </div>
                        ))}
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
