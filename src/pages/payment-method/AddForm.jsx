const AddForm = () => {
  return (
    <div
      class="modal fade"
      id="paymentModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="paymentModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header align-items-center d-flex">
            <h5 class="modal-title" id="paymentModalLabel">
              Add New Payment Method
            </h5>

            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div class="modal-body">
            <div>
              <form class="row mb-4">
                <div class="mb-3 col-12 col-md-12 mb-4">
                  <h5 class="mb-3">Credit / Debit card</h5>

                  <div class="d-inline-flex">
                    <div class="form-check me-2">
                      <input
                        type="radio"
                        id="paymentRadioOne"
                        name="paymentRadioOne"
                        class="form-check-input"
                      />
                      <label class="form-check-label" for="paymentRadioOne">
                        <img
                          src="../assets/images/payment/american-express.svg"
                          alt=""
                        />
                      </label>
                    </div>

                    <div class="form-check me-2">
                      <input
                        type="radio"
                        id="paymentRadioTwo"
                        name="paymentRadioOne"
                        class="form-check-input"
                      />
                      <label class="form-check-label" for="paymentRadioTwo">
                        <img
                          src="../assets/images/payment/mastercard.svg"
                          alt=""
                        />
                      </label>
                    </div>

                    <div class="form-check">
                      <input
                        type="radio"
                        id="paymentRadioFour"
                        name="paymentRadioOne"
                        class="form-check-input"
                      />
                      <label class="form-check-label" for="paymentRadioFour">
                        <img src="../assets/images/payment/visa.svg" alt="" />
                      </label>
                    </div>
                  </div>
                </div>

                <div class="mb-3 col-12 col-md-4">
                  <label for="nameoncard" class="form-label">
                    Name on card
                  </label>
                  <input
                    id="nameoncard"
                    type="text"
                    class="form-control"
                    name="nameoncard"
                    placeholder="Name"
                    required
                  />
                </div>

                <div class="mb-3 col-12 col-md-4">
                  <label class="form-label">Month</label>
                  <select class="form-select">
                    <option value="">Month</option>
                    <option value="Jan">Jan</option>
                    <option value="Feb">Feb</option>
                    <option value="Mar">Mar</option>
                    <option value="Apr">Apr</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="Aug">Aug</option>
                    <option value="Sep">Sep</option>
                    <option value="Oct">Oct</option>
                    <option value="Nov">Nov</option>
                    <option value="Dec">Dec</option>
                  </select>
                </div>

                <div class="mb-3 col-12 col-md-4">
                  <label class="form-label">Year</label>
                  <select class="form-select">
                    <option value="">Year</option>
                    <option value="June">2022</option>
                    <option value="July">2023</option>
                    <option value="August">2024</option>
                    <option value="Sep">2025</option>
                    <option value="Oct">2026</option>
                  </select>
                </div>

                <div class="mb-3 col-md-8 col-12">
                  <label for="cc-mask" class="form-label">
                    Card Number
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="cc-mask"
                    placeholder="xxxx-xxxx-xxxx-xxxx"
                    required
                  />
                </div>

                <div class="mb-3 col-md-4 col-12">
                  <div class="mb-3">
                    <label for="cvv" class="form-label">
                      CVV Code
                      <i
                        class="feather-icon icon-help-circle ms-1"
                        data-bs-toggle="tooltip"
                        data-placement="top"
                        title="A 3 - digit number, typically printed on the back of a card."
                      ></i>
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="cvv"
                      placeholder="xxx"
                      required
                    />
                  </div>
                </div>

                <div class="col-md-6 col-12">
                  <button class="btn btn-primary" type="submit">
                    Add New Card
                  </button>
                  <button
                    class="btn btn-outline-gray-400 text-muted"
                    type="button"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </form>
              <span>
                <strong>Note:</strong> that you can later remove your card at
                the account setting page.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddForm;
