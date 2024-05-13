const AddForm = () => {
  return (
    <div
      class="modal fade"
      id="addAddressModal"
      tabindex="-1"
      aria-labelledby="addAddressModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body p-6">
            <div class="d-flex justify-content-between mb-5">
              <div>
                <h5 class="h6 mb-1" id="addAddressModalLabel">
                  New Shipping Address
                </h5>
                <p class="small mb-0">
                  Add new shipping address for your order delivery.
                </p>
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

            <div class="row g-3">
              <div class="col-12">
                <input
                  type="text"
                  class="form-control"
                  placeholder="First name"
                  aria-label="First name"
                  required=""
                />
              </div>

              <div class="col-12">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last name"
                  aria-label="Last name"
                  required=""
                />
              </div>

              <div class="col-12">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Address Line 1"
                />
              </div>

              <div class="col-12">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Address Line 2"
                />
              </div>

              <div class="col-12">
                <input type="text" class="form-control" placeholder="City" />
              </div>

              <div class="col-12">
                <select class="form-select">
                  <option selected="">India</option>
                  <option value="1">UK</option>
                  <option value="2">USA</option>
                  <option value="3">UAE</option>
                </select>
              </div>

              <div class="col-12">
                <select class="form-select" aria-label="Default select example">
                  <option selected="">Gujarat</option>
                  <option value="1">Northern Ireland</option>
                  <option value="2">Alaska</option>
                  <option value="3">Abu Dhabi</option>
                </select>
              </div>

              <div class="col-12">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Zip Code"
                />
              </div>

              <div class="col-12">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Business Name"
                />
              </div>

              <div class="col-12">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Set as Default
                  </label>
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
                <button class="btn btn-primary" type="button">
                  Save Address
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddForm;
