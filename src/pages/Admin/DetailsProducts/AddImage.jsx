import React, { useState } from "react";
import useHook from "./hooks/useHook";

const AddImage = () => {
  const [img, setImage] = useState("");
  const { addImage, loading } = useHook();
  const submit = (e) => {
    e.preventDefault();
    addImage(img);
  };
  return (
    <div
      class="modal fade"
      id="addImage"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="input-group">
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              class="form-control"
              id="inputGroupFile04"
              aria-describedby="inputGroupFileAddon04"
              aria-label="Upload"
              required
            />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
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
              <button type="button" class="btn btn-primary" onClick={submit}>
                Add Image
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddImage;
