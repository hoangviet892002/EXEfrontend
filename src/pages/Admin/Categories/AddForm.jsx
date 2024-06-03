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
      className="modal fade"
      id="addCategoryModal"
      tabIndex="-1"
      aria-labelledby="addCategoryModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body p-6">
            <div className="d-flex justify-content-between mb-5">
              <div>
                <h5 className="h6 mb-1" id="addAddressModalLabel">
                  New Categories
                </h5>
              </div>
              <div>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
            </div>

            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Category name"
                  aria-label="First name"
                  required
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                />
              </div>
              <div className="col-12">
                <div className="input-group">
                  <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    className="form-control"
                    id="inputGroupFile04"
                    aria-describedby="inputGroupFileAddon04"
                    aria-label="Upload"
                    required
                  />
                </div>
              </div>

              <div className="col-12 text-end">
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                {loading ? (
                  <button className="btn btn-primary" type="button" disabled>
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Loading...
                  </button>
                ) : (
                  <button className="btn btn-primary" type="submit">
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
