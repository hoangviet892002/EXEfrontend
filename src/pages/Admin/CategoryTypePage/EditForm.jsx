import { useEffect, useState } from "react";
import useHookUploadImage from "../../../hook/useHookUploadImage";
import useHook from "./hooks/useHook";
import { useSelector } from "react-redux";

const EditForm = () => {
  const type = useSelector((state) => state.category.categoryType);
  const [inputs, setInputs] = useState({
    name: "",
  });
  const { loading } = useHook();
  useEffect(() => {
    if (type !== null) setInputs(type);
  }, [type]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div
      class="modal fade"
      id="editCategoryModal"
      tabindex="-1"
      aria-labelledby="editCategoryModalLabel"
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

            <div class="row g-3" onSubmit={handleSubmit}>
              <div class="col-12">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Category name"
                  aria-label="First name"
                  required
                  value={inputs.name}
                  onChange={(e) =>
                    setInputs({ ...inputs, name: e.target.value })
                  }
                />
              </div>

              <div class="col-12 ">
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
                    Save Type
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditForm;
