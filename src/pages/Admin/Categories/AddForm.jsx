import { useEffect, useState } from "react";
import useHookUploadImage from "../../../hook/useHookUploadImage";
import useHook from "./hooks/useHook";

const AddForm = () => {
  const [categoryName, setCategoryName] = useState("");
  const [img, setImage] = useState("");
  const { loading, submit } = useHook();

  const handleSubmit = async (e) => {
    e.preventDefault();
    submit(categoryName, img);
  };
  return (
    <div
      class="modal fade"
      id="addCategoryModal"
      tabindex="-1"
      aria-labelledby="addCategoryModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body p-6">
            <div class="d-flex justify-content-between mb-5">
              <div>
                <h5 class="h6 mb-1" id="addAddressModalLabel">
                  New Categories
                </h5>
              </div>
              <div>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
            </div>

            <form class="row g-3" onSubmit={handleSubmit}>
              <div class="col-12">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Category name"
                  aria-label="First name"
                  required
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                />
              </div>
              <div class="col-12">
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
              </div>

              <div class="col-12 text-end">
                <button
                  type="button"
                  class="btn btn-outline-primary"
                  data-bs-dismiss="modal"
                >
                  Cancel
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
                  <button class="btn btn-primary" type="submit">
                    Save Category
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddForm;
