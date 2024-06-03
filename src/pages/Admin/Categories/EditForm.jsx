import { useEffect, useState } from "react";
import useHookUploadImage from "../../../hook/useHookUploadImage";
import useHook from "./hooks/useHook";
import { useSelector } from "react-redux";

const EditForm = () => {
  const category = useSelector((state) => state.category.category);
  const [inputs, setInputs] = useState({
    name: "",
  });
  const [img, setImage] = useState("");
  const { loading } = useHook();
  useEffect(() => {
    if (category !== null) setInputs(category);
  }, [category]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div
      className="modal fade"
      id="editCategoryModal"
      tabIndex="-1"
      aria-labelledby="editCategoryModalLabel"
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

            <div className="row g-3" onSubmit={handleSubmit}>
              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Category name"
                  aria-label="First name"
                  required
                  value={inputs.name}
                  onChange={(e) =>
                    setInputs({ ...inputs, name: e.target.value })
                  }
                />
              </div>

              <div className="col-12 ">
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
                  <button className="btn btn-primary">Save Category</button>
                )}
              </div>
              <form className="col-12">
                <div className="input-group mb-3">
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
                    Save Image
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditForm;
