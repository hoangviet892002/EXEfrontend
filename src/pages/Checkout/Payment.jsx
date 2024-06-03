const Payment = () => {
  return (
    <div className="accordion-item py-4">
      <a
        href="#"
        className="text-inherit h5"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapseFour"
        aria-expanded="false"
        aria-controls="flush-collapseFour"
      >
        <i className="feather-icon icon-credit-card me-2 text-muted"></i>
        Payment Method
      </a>
      <div
        id="flush-collapseFour"
        className="accordion-collapse collapse"
        data-bs-parent="#accordionFlushExample"
      >
        <div className="mt-5">
          <div>
            <div className="card card-bordered shadow-none mb-2">
              <div className="card-body p-6">
                <div className="d-flex">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="paypal"
                    />
                    <label
                      className="form-check-label ms-2"
                      for="paypal"
                    ></label>
                  </div>
                  <div>
                    <h5 className="mb-1 h6">Payment with Paypal</h5>
                    <p className="mb-0 small">
                      You will be redirected to PayPal website to complete your
                      purchase securely.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card card-bordered shadow-none mb-2">
              <div className="card-body p-6">
                <div className="d-flex mb-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="creditdebitcard"
                    />
                    <label
                      className="form-check-label ms-2"
                      for="creditdebitcard"
                    ></label>
                  </div>
                  <div>
                    <h5 className="mb-1 h6">Credit / Debit Card</h5>
                    <p className="mb-0 small">
                      Safe money transfer using your bank accou k account. We
                      support Mastercard tercard, Visa, Discover and Stripe.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="mb-3">
                      <label className="form-label">Card Number</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="1234 4567 6789 4321"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="mb-3 mb-lg-0">
                      <label className="form-label">Name on card</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your first name"
                      />
                    </div>
                  </div>
                  <div className="col-md-3 col-12">
                    <div className="mb-3 mb-lg-0 position-relative">
                      <label className="form-label">Expiry date </label>
                      <input
                        className="form-control flatpickr"
                        type="text"
                        placeholder="Select Date"
                      />
                      <div className="position-absolute bottom-0 end-0 p-3 lh-1">
                        <i className="bi bi-calendar text-muted"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-12">
                    <div className="mb-3 mb-lg-0">
                      <label className="form-label">CVV code </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="312"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card card-bordered shadow-none mb-2">
              <div className="card-body p-6">
                <div className="d-flex">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="payoneer"
                    />
                    <label
                      className="form-check-label ms-2"
                      for="payoneer"
                    ></label>
                  </div>
                  <div>
                    <h5 className="mb-1 h6">Pay with Payoneer</h5>
                    <p className="mb-0 small">
                      You will be redirected to Payoneer website to complete
                      your purchase securely.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card card-bordered shadow-none">
              <div className="card-body p-6">
                <div className="d-flex">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="cashonDelivery"
                    />
                    <label
                      className="form-check-label ms-2"
                      for="cashonDelivery"
                    ></label>
                  </div>
                  <div>
                    <h5 className="mb-1 h6">Cash on Delivery</h5>
                    <p className="mb-0 small">
                      Pay with cash when your order is delivered.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 d-flex justify-content-end">
              <a
                href="#"
                className="btn btn-outline-gray-400 text-muted"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Prev
              </a>
              <a href="#" className="btn btn-primary ms-2">
                Place Order
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Payment;
