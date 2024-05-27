import React, { useState } from "react";
import imageproduct from "../../../../assets/images/products/product-img-6.jpg";

const Container = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const handleRemoveFile = (index) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the file upload here
    console.log(selectedFiles);
  };

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
              <div class="row">
                <div class="col-xl-6">
                  <div class="mb-3">
                    <label for="projectname" class="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      id="projectname"
                      class="form-control"
                      placeholder="Enter project name"
                    />
                  </div>

                  <div class="mb-3">
                    <label for="project-overview" class="form-label">
                      Overview
                    </label>
                    <textarea
                      class="form-control"
                      id="project-overview"
                      rows="5"
                      placeholder="Enter some brief about project.."
                    ></textarea>
                  </div>

                  <div class="mb-3 position-relative" id="datepicker1">
                    <label class="form-label">Start Date</label>
                    <input
                      type="text"
                      class="form-control"
                      data-provide="datepicker"
                      data-date-container="#datepicker1"
                      data-date-format="d-M-yyyy"
                      data-date-autoclose="true"
                    />
                  </div>

                  <div class="mb-3">
                    <label for="project-budget" class="form-label">
                      Budget
                    </label>
                    <input
                      type="text"
                      id="project-budget"
                      class="form-control"
                      placeholder="Enter project budget"
                    />
                  </div>

                  <div class="mb-0">
                    <label for="project-overview" class="form-label">
                      Categories
                    </label>

                    <div class="form-control select2" data-toggle="select2">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="in-store"
                          id="in-store"
                        />
                        <label class="form-check-label" for="in-store">
                          In-store selling only
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="online"
                          id="online"
                        />
                        <label class="form-check-label" for="online">
                          Online selling only
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="both"
                          id="both"
                        />
                        <label class="form-check-label" for="both">
                          Available both in-store and online
                        </label>
                      </div>
                    </div>
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
                  <button className="btn btn-primary mt-3">Upload</button>
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
