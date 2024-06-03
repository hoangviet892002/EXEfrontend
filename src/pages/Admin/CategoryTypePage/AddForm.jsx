import { useState } from "react";
import useHook from "./hooks/useHook";
import { useParams } from "react-router-dom";

const AddForm = () => {
  const { id } = useParams();
  const [categoryName, setCategoryName] = useState("");
  const { loading, submit } = useHook();

  const handleSubmit = async (e) => {
    e.preventDefault();
    submit(categoryName, id);
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
                  placeholder="Category type name"
                  aria-label="First name"
                  required
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                />
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
                    Save Type
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
